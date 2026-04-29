# Download hero background videos from Pexels and place them in public/videos/
# Run once: ! powershell -ExecutionPolicy Bypass -File scripts/download-hero-videos.ps1

$videos = @(
  @{ url = "https://videos.pexels.com/video-files/1085656/1085656-uhd_2560_1440_25fps.mp4";  out = "products.mp4";    label = "Products - Blue network cables" },
  @{ url = "https://videos.pexels.com/video-files/5028622/5028622-uhd_2560_1440_25fps.mp4";  out = "platform.mp4";    label = "Platform - Server rack storage" },
  @{ url = "https://videos.pexels.com/video-files/32135560/13701231_2560_1440_25fps.mp4";    out = "analytics.mp4";   label = "Analytics - Data analysis screen" },
  @{ url = "https://videos.pexels.com/video-files/7140928/7140928-uhd_2560_1440_24fps.mp4";  out = "security.mp4";    label = "Security - CPU circuit board" },
  @{ url = "https://videos.pexels.com/video-files/6804656/6804656-uhd_2732_1440_25fps.mp4";  out = "automation.mp4";  label = "Automation - Engineer with servers" },
  @{ url = "https://videos.pexels.com/video-files/8632193/8632193-uhd_2560_1440_25fps.mp4";  out = "services.mp4";    label = "Services - Business meeting" },
  @{ url = "https://videos.pexels.com/video-files/32258501/13757356_2560_1440_50fps.mp4";    out = "industries.mp4";  label = "Industries - Aerial night city" },
  @{ url = "https://videos.pexels.com/video-files/6587456/6587456-hd_1920_1080_25fps.mp4";  out = "about.mp4";       label = "About - People working together" },
  @{ url = "https://videos.pexels.com/video-files/7580275/7580275-uhd_2732_1440_25fps.mp4";  out = "resources.mp4";   label = "Resources - Data visualization" }
)

$dest = Join-Path $PSScriptRoot "..\public\videos"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Host "Saving to: $dest`n"

foreach ($v in $videos) {
  $path = Join-Path $dest $v.out
  if (Test-Path $path) {
    Write-Host "SKIP (exists): $($v.out)"
    continue
  }
  Write-Host "Downloading: $($v.label)..."
  try {
    Invoke-WebRequest -Uri $v.url -OutFile $path -UserAgent "Mozilla/5.0" -TimeoutSec 300
    $size = [math]::Round((Get-Item $path).Length / 1MB, 1)
    Write-Host "  -> $($v.out) ($size MB)"
  } catch {
    Write-Host "  ERROR: $_"
  }
}

Write-Host "`nDone. Update each page's videoSrc to point to /videos/<name>.mp4"
