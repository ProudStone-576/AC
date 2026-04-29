#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Aethon Core — Server Monitoring Agent
# Version: 1.0.0
#
# Pushes CPU, RAM, disk, and uptime data to your Aethon Core portal.
# Run once (manual test) or set up as a cron job (recommended: every 5 min).
#
# SETUP
# 1. Set your API key and asset name below (or use environment variables).
# 2. Make executable:  chmod +x monitoring-agent.sh
# 3. Run manually:     ./monitoring-agent.sh
# 4. Add to cron:      crontab -e
#    Then add this line (runs every 5 minutes):
#    */5 * * * * AETHON_API_KEY="your-key" AETHON_ASSET_NAME="server-name" /path/to/monitoring-agent.sh >> /var/log/aethon-agent.log 2>&1
#
# REQUIREMENTS: bash, curl, awk, df, free (all standard on Linux)
# ─────────────────────────────────────────────────────────────────────────────

AETHON_API_KEY="${AETHON_API_KEY:-YOUR_API_KEY_HERE}"
AETHON_ASSET_NAME="${AETHON_ASSET_NAME:-$(hostname)}"
AETHON_ENDPOINT="${AETHON_ENDPOINT:-https://aethoncore.com/api/metrics}"

# ── Collect metrics ───────────────────────────────────────────────────────────

# CPU usage (1-second sample via /proc/stat)
read -r cpu_fields1 < /proc/stat
sleep 1
read -r cpu_fields2 < /proc/stat

idle1=$(echo "$cpu_fields1" | awk '{print $5}')
total1=$(echo "$cpu_fields1" | awk '{for(i=2;i<=NF;i++) t+=$i; print t}')
idle2=$(echo "$cpu_fields2" | awk '{print $5}')
total2=$(echo "$cpu_fields2" | awk '{for(i=2;i<=NF;i++) t+=$i; print t}')
d_idle=$((idle2 - idle1))
d_total=$((total2 - total1))
CPU_PERCENT=$(awk "BEGIN {printf \"%.1f\", (1 - $d_idle/$d_total) * 100}")

# RAM usage
RAM_TOTAL=$(awk '/^MemTotal:/{print $2}' /proc/meminfo)
RAM_AVAIL=$(awk '/^MemAvailable:/{print $2}' /proc/meminfo)
RAM_USED=$((RAM_TOTAL - RAM_AVAIL))
RAM_PERCENT=$(awk "BEGIN {printf \"%.1f\", ($RAM_USED / $RAM_TOTAL) * 100}")

# Disk usage (root partition)
DISK_PERCENT=$(df / | awk 'NR==2{gsub(/%/,"",$5); print $5}').0

# Uptime percentage (uptime vs 30-day window)
UPTIME_SECONDS=$(awk '{print int($1)}' /proc/uptime)
THIRTY_DAYS_SECONDS=$((30 * 24 * 3600))
if [ "$UPTIME_SECONDS" -ge "$THIRTY_DAYS_SECONDS" ]; then
  UPTIME_PERCENT="100.00"
else
  UPTIME_PERCENT=$(awk "BEGIN {printf \"%.2f\", ($UPTIME_SECONDS/$THIRTY_DAYS_SECONDS)*100}")
fi

# Determine status based on thresholds
STATUS="healthy"
CPU_INT=${CPU_PERCENT%.*}
RAM_INT=${RAM_PERCENT%.*}
DISK_INT=${DISK_PERCENT%.*}

if [ "${CPU_INT:-0}" -ge 90 ] || [ "${RAM_INT:-0}" -ge 90 ] || [ "${DISK_INT:-0}" -ge 90 ]; then
  STATUS="critical"
elif [ "${CPU_INT:-0}" -ge 75 ] || [ "${RAM_INT:-0}" -ge 80 ] || [ "${DISK_INT:-0}" -ge 80 ]; then
  STATUS="warning"
fi

# ── Push to Aethon Core ───────────────────────────────────────────────────────

PAYLOAD="{\"assetName\":\"$AETHON_ASSET_NAME\",\"cpuPercent\":$CPU_PERCENT,\"ramPercent\":$RAM_PERCENT,\"diskPercent\":$DISK_PERCENT,\"uptimePercent\":$UPTIME_PERCENT,\"status\":\"$STATUS\"}"

RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X POST "$AETHON_ENDPOINT" \
  -H "Authorization: Bearer $AETHON_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -1)

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

if [ "$HTTP_CODE" = "200" ]; then
  echo "[$TIMESTAMP] OK  cpu=${CPU_PERCENT}% ram=${RAM_PERCENT}% disk=${DISK_PERCENT}% uptime=${UPTIME_PERCENT}% status=${STATUS}"
else
  echo "[$TIMESTAMP] ERR HTTP $HTTP_CODE — $BODY"
  exit 1
fi
