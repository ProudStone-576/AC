import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { Calendar } from "lucide-react"

// ─── Hardcoded use-case library ───────────────────────────────────────────────
type CaseStudy = {
  title: string
  industry: string
  client: string
  summary: string
  result: string
  metrics?: { value: string; label: string }[]
  body: { heading: string; text: string }[]
}

const hardcodedCaseStudies: Record<string, CaseStudy> = {
  "financial-multi-jurisdiction": {
    title: "Expanding into new markets without building a separate technology stack for each one",
    industry: "Multi-Jurisdiction Compliance",
    client: "Financial Services",
    summary:
      "A financial institution expanding into new countries faces a common trap: each country has different regulations, and the natural response is to build a separate system for each one. That creates more technology to manage, more places for things to go wrong, and costs that grow faster than the business.",
    result:
      "We built one unified system where the rules change by policy — not by rebuilding the architecture. Adding a new market means updating a policy, not deploying new infrastructure.",
    metrics: [
      { value: "9", label: "Markets on one platform" },
      { value: "67%", label: "Reduction in compliance overhead" },
      { value: "< 3 weeks", label: "Time to activate a new market" },
    ],
    body: [
      {
        heading: "The compliance sprawl problem",
        text: "The institution had expanded from three countries to seven over four years, and each expansion had been treated as a standalone technology project. Country A required specific data residency rules, so a separate database cluster was deployed there. Country B had transaction reporting requirements that didn't exist elsewhere, so a new reporting pipeline was built in isolation. Country C had specific identity verification requirements under its local AML framework, so a third-party integration was bolted on that didn't connect to anything else. By the time the institution began working with us, it was operating seven distinct compliance environments — each with its own engineering team, its own vendor contracts, its own deployment cadence, and its own failure modes. The compliance function spent more time reconciling differences between environments than it did on actual compliance work.",
      },
      {
        heading: "Designing a policy-driven architecture",
        text: "The core design decision was to treat regulatory requirements as configuration, not as code. In most compliance architectures, regulatory rules are embedded in the application logic — a specific function checks whether a transaction is above a reporting threshold, a specific module enforces data residency by writing to a particular database, a specific workflow handles identity verification for a particular jurisdiction. The problem with this approach is that changing the rules means changing the code, which means deployment cycles, testing, and risk. We designed a policy engine that sits between the application logic and its execution environment. Every operation — a transaction, a data write, an identity check — is evaluated against the policy engine before it executes. The policy engine holds all the jurisdiction-specific rules as structured configuration, not as code. Engineers who need to understand or change a rule open a configuration file, not a codebase.",
      },
      {
        heading: "Building the unified control layer",
        text: "The policy engine alone wasn't sufficient — it needed to be backed by infrastructure that could actually enforce its decisions across different geographic regions. We built a control plane that runs in each jurisdiction where the institution operates, connected to a central management layer. Each regional control plane enforces local data residency rules — data classified as belonging to a particular jurisdiction stays within that jurisdiction's compute and storage boundary. The central management layer holds the policy configuration and distributes it to each regional control plane, but doesn't see the data the control planes process. This architecture satisfies data residency requirements without requiring separate application deployments. The same application code runs in every region. The control plane in each region applies the rules that apply there. When the rules change, we update the policy configuration in the central management layer, which distributes the change to all regional control planes within minutes.",
      },
      {
        heading: "Migration without disrupting live operations",
        text: "Migrating seven live compliance environments into a single unified system without disrupting operations required running the old and new systems in parallel for a transition period. We chose a jurisdiction-by-jurisdiction migration sequence based on transaction volume and operational risk: the lowest-volume jurisdiction first, the highest-volume jurisdiction last. For each jurisdiction, we ran the new control plane alongside the existing environment for 30 days, comparing outputs transaction by transaction. The comparison identified seven cases where our policy configuration produced different outputs than the existing system — in four of those cases, the existing system was producing incorrect results that hadn't been caught by the prior audit process. Only after the output comparison was clean did we cut traffic over to the new system and decommission the old environment. The entire migration across all seven jurisdictions took eleven months.",
      },
      {
        heading: "The outcome: one system, nine markets",
        text: "By the time the migration was complete, the institution had opened two additional markets during the process — both of which activated on the new platform rather than as separate deployments. The compliance function's overhead dropped by 67% measured in engineering hours per quarter, because changes that previously required coordinating seven separate deployment cycles now required a single policy configuration update. The institution's internal audit team rated its compliance posture as materially stronger after consolidation than before, because the unified system made it possible to run consistent controls across all markets rather than accepting variation because each environment was managed separately. The time to activate a new market — from regulatory approval to live operations — went from an average of five months to under three weeks.",
      },
    ],
  },

  "healthcare-zero-trust": {
    title: "Improving hospital security without disrupting doctors and nurses",
    industry: "Zero Trust Security",
    client: "Healthcare",
    summary:
      "A large hospital network with fourteen facilities was operating on perimeter-based network security — a model where anything inside the network boundary was treated as trusted. An internal red team exercise had revealed that a single compromised endpoint could reach clinical systems, administrative systems, and patient records without further authentication. The security team knew the architecture needed to change. The operational constraint was that any security change that interrupted clinical workflows or created friction for clinical staff would not be tolerated.",
    result:
      "We redesigned the network so nothing is trusted by default — every device and user is verified before getting access. Security became part of how the system works, not a separate checklist.",
    metrics: [
      { value: "14", label: "Facilities migrated" },
      { value: "Zero", label: "Clinical workflow disruptions" },
      { value: "< 4 min", label: "Mean detection time" },
    ],
    body: [
      {
        heading: "The hidden cost of perimeter security in clinical environments",
        text: "The hospital network's existing security model dated to a time when clinical systems were largely standalone and the network perimeter was a meaningful boundary. Neither of those conditions still held. Clinical staff carried personal mobile devices that connected to the hospital network. Medical equipment increasingly ran embedded operating systems that couldn't be updated on a standard IT patch cycle. Third-party vendors accessed clinical systems remotely for maintenance and support. The perimeter had so many legitimate exceptions that it no longer functioned as a control — it was a formality. The red team's findings had made this visible to leadership in a way that routine vulnerability assessments hadn't: they had moved laterally from a compromised nursing workstation to a medication dispensing system in eleven minutes, without triggering a single alert.",
      },
      {
        heading: "Mapping the access landscape before changing anything",
        text: "We spent the first twelve weeks doing nothing except observing. We deployed network monitoring across all fourteen facilities — passive sensors that recorded traffic patterns without inspecting payload content. We inventoried every device on the network: clinical endpoints, medical equipment, administrative workstations, vendor access terminals, and the building management systems that most security programs overlook. We documented every access relationship: which systems communicated with which, on which ports, at which frequencies. At the end of this phase, we had a complete access map of the network as it actually operated — not as it was documented in the network diagrams, which were significantly out of date. The access map revealed 340 active communication relationships that had no corresponding documentation, including seventeen cases where medical equipment was communicating with external IP addresses for purposes that no one in the IT or clinical engineering teams could explain.",
      },
      {
        heading: "Implementing microsegmentation without disrupting care",
        text: "We designed the segmentation architecture around clinical workflows rather than around network topology. A traditional network segmentation approach divides the network into zones by function — clinical systems in one zone, administrative systems in another, guest WiFi in a third. This approach is straightforward to implement but creates friction: a clinical staff member who needs to access both clinical and administrative systems encounters barriers at zone boundaries. Our approach segmented by identity and device posture rather than by network location. A physician accessing clinical systems from a hospital-managed device with current patches gets access to clinical systems. The same physician accessing the same systems from an unmanaged personal device gets access to a limited view that doesn't include system-level data. Access decisions happen at the application layer, not at the network perimeter. This approach required deploying an identity-aware proxy for clinical applications — a component that evaluates the identity and device posture of every access request before forwarding it to the application. The proxy operates transparently for compliant devices and users: they experience no change in their workflow. The segmentation is enforced without visible friction.",
      },
      {
        heading: "Device posture for medical equipment that can't run security agents",
        text: "The most technically difficult part of the Zero Trust implementation was handling medical equipment. Clinical devices — infusion pumps, imaging systems, patient monitoring equipment — run embedded operating systems that cannot be modified by the hospital's IT team. They cannot run endpoint detection agents. They cannot participate in a standard device posture assessment. We solved this with network-based behavioral profiling. Each device category — infusion pumps, imaging systems, monitoring equipment — has a characteristic communication pattern: specific protocols, specific destination addresses, specific traffic volumes at specific times. We built behavioral baselines for each device category based on the access map data collected during the observation phase. Any device whose communication pattern deviates from its baseline triggers an alert and, depending on the severity of the deviation, is quarantined to a restricted network segment automatically. This approach doesn't require modifying the medical equipment. It monitors the network behavior of devices that can't be directly managed, and treats anomalous behavior as a security signal.",
      },
      {
        heading: "Operational results and sustained compliance posture",
        text: "The migration to the new architecture took eighteen months across all fourteen facilities, with each facility completing its transition in a four-week window during which both old and new controls operated simultaneously. There were no clinical workflow disruptions during the transition — the proxy-based access model was invisible to clinical staff on managed devices, and the medical device profiling system operated passively without touching clinical equipment. In the first six months of full operation, the system detected and quarantined eleven devices exhibiting anomalous behavior — nine of which turned out to be medical equipment with firmware issues rather than security incidents, and two of which were confirmed compromised endpoints. Both compromised endpoints were contained to their device segments; neither was able to reach clinical systems. The hospital network's annual compliance audit produced a materially improved assessment, with the auditors noting specifically that the device inventory and access documentation were more complete than they had seen in comparable healthcare environments.",
      },
    ],
  },

  "retail-analytics": {
    title: "Getting business answers in minutes instead of waiting for weekly reports",
    industry: "Real-Time Analytics",
    client: "Retail & Commerce",
    summary:
      "A national retailer operating 280 stores across Canada and the United States had a data problem that looked like a reporting problem. Weekly sales reports were produced every Monday morning for the previous week's data. By the time a regional manager received information about an underperforming store or a supply shortage, it was already ten to fourteen days old. The decisions that needed to be made based on that information — reordering stock, adjusting staffing, responding to competitor pricing — had already been delayed by the time the information arrived.",
    result:
      "We rebuilt the data pipeline from the point of sale all the way through to role-specific dashboards. The Monday report was replaced with a live view that updates continuously. Decisions that took a week to trigger now happen the same day.",
    metrics: [
      { value: "280", label: "Stores on live data" },
      { value: "< 90 sec", label: "Point-of-sale to dashboard" },
      { value: "31%", label: "Reduction in stockout incidents" },
    ],
    body: [
      {
        heading: "The batch data problem hiding in plain sight",
        text: "The retailer's data infrastructure had been built incrementally over fifteen years. Point-of-sale systems in each store wrote transactions to a local database throughout the day. Every night at 2:00 a.m., an ETL process collected the previous day's transactions from every store and loaded them into a central data warehouse. A second ETL process ran on Sunday nights to aggregate the week's data and populate the reporting tables that the Monday morning reports were generated from. The architecture had made sense in 2009, when the alternative was more expensive. By the time we began working with this retailer, the batch model was creating business problems that were clearly attributable to data latency: buyers placing reorders based on inventory counts that were forty-eight hours old, regional managers making staffing decisions based on sales patterns that were nine days old, and a marketing team running promotions without any visibility into how individual stores were responding until the following Monday.",
      },
      {
        heading: "Redesigning the pipeline from event to insight",
        text: "We replaced the nightly ETL batch process with a streaming pipeline. Every transaction at every point-of-sale terminal now produces an event that is published to a message broker in real time. The message broker holds the event for downstream consumers to process. The first consumer updates the inventory management system: when a product is sold, its inventory count in the central system decreases immediately, not at 2:00 a.m. the following morning. The second consumer updates the analytics platform: transaction data is available for querying within ninety seconds of the sale occurring. We chose a streaming architecture rather than a more frequent batch architecture — running ETL every fifteen minutes rather than every night — because streaming and frequent-batch have very different failure characteristics. A streaming pipeline that develops a processing backlog produces data that is slightly delayed but correct. A frequent-batch pipeline that fails halfway through a run produces data that is missing for a period, with no straightforward way to detect the gap from the consumer side. For a retailer where inventory accuracy has direct revenue implications, the failure mode of the streaming architecture was substantially safer.",
      },
      {
        heading: "Role-based dashboards that match how decisions are made",
        text: "The technology change only created value if the people making decisions could act on the information. We worked with the retailer's operations, buying, and marketing teams before building any dashboards to understand specifically what questions each role needed to answer, how frequently they made decisions that required those answers, and what the consequence of a delayed answer was. Store managers needed to see their current day's sales against target, their current inventory levels for fast-moving products, and a flag when any product category fell below reorder threshold. Regional managers needed a view across their stores that showed which stores were running ahead or behind target that day, which stores had potential stock issues, and staffing coverage for the current shift. The buying team needed product-level sell-through rates by region so they could respond to demand signals with reorder decisions the same day rather than the following week. We built each of these views as a distinct dashboard with a distinct data model, rather than building a single flexible analytics environment and expecting each team to construct their own views. Flexible self-service analytics is valuable for exploration; it produces worse outcomes than purpose-built views for recurring operational decisions.",
      },
      {
        heading: "Handling peak load: Black Friday as the real stress test",
        text: "The streaming pipeline's throughput requirement on a normal day was approximately 400,000 transactions across all 280 stores. On Black Friday, transaction volume across the retailer's highest-traffic stores runs at twelve to fifteen times normal volume during peak hours. We designed the pipeline to scale horizontally to handle peak load — adding processing capacity automatically as transaction volume increases, and releasing it as volume returns to normal. The retailer's previous batch architecture had handled peak periods by accepting that the data would be slower than usual; the ETL process that normally took three hours to run would sometimes take eight hours during high-volume periods, meaning that Monday's report after Black Friday weekend might be based on data that was two days old in some stores. The streaming pipeline's first Black Friday ran without incident. Peak transaction volume reached 6,200 transactions per minute across the network. The pipeline processed the volume with end-to-end latency under 75 seconds throughout — faster than normal day performance, because the horizontal scaling had been over-provisioned to provide a safety margin.",
      },
      {
        heading: "What changed in the business",
        text: "The most significant business outcome was not the technology change but the behavioral change it enabled. In the first six months of live data, the buying team made same-day reorder decisions on forty-three occasions where a product category was tracking to stockout in a high-demand store. In the batch data model, thirty-seven of those forty-three situations would not have been visible until the following Monday, by which point the stockout would already have occurred. Stockout incidents across the network dropped by 31% in the first year. The marketing team began running store-specific promotions that could be evaluated and adjusted within hours, rather than promotions designed for broad regional rollout because the feedback loop had been too slow for anything more targeted. Regional managers reported spending significantly less time in their weekly review meetings because the questions those meetings had been designed to answer — how did last week go, which stores had problems — were answered continuously during the week by the dashboard, not retrospectively in a meeting.",
      },
    ],
  },

  "manufacturing-predictive-maintenance": {
    title: "Catching equipment failures before they happen instead of after",
    industry: "Predictive Maintenance",
    client: "Manufacturing",
    summary:
      "A precision components manufacturer operating four facilities was losing an average of 340 hours per year per facility to unplanned equipment downtime. The maintenance team operated on a scheduled maintenance model — machines were serviced on a calendar schedule regardless of their actual condition. When machines failed between scheduled maintenance windows, the failure was treated as unpredictable. The plant engineers knew from experience that many failures showed precursor signals hours or days before the failure occurred, but had no system for capturing or acting on those signals.",
    result:
      "We connected the factory floor sensor networks to an analytics platform that models normal operating patterns for each machine and alerts on deviations before they become failures. Unplanned downtime dropped by 74% across all four facilities in the first year.",
    metrics: [
      { value: "74%", label: "Reduction in unplanned downtime" },
      { value: "340 hrs", label: "Annual hours recovered per facility" },
      { value: "6 hrs", label: "Average advance warning time" },
    ],
    body: [
      {
        heading: "When downtime is priced into the business",
        text: "The manufacturer had calculated its cost of unplanned downtime at approximately $8,400 per hour across direct labor, overhead absorption, and expediting costs when a production run had to be restarted. At 340 annual hours per facility, the total cost across four facilities was approximately $11.4 million per year — a number that had been stable enough for long enough that it had been absorbed into the business model as a fixed cost rather than treated as a problem with a solution. The scheduled maintenance model had been the solution, and the prevailing view among plant management was that the remaining downtime was a residual that couldn't be eliminated. The plant engineers didn't agree. They had records of dozens of cases where a machine had been vibrating differently, running hotter, or drawing more current than usual in the days before it failed. The information had existed; there had just been no system to capture it systematically or alert anyone when patterns crossed meaningful thresholds.",
      },
      {
        heading: "Connecting OT and IT: the integration challenge",
        text: "The four facilities had different vintages of equipment installed at different times over a span of twenty years. Some machines had modern programmable logic controllers with digital sensor outputs that could be read directly over Ethernet. Others had older PLCs with serial interfaces. A third category — the oldest equipment — had no digital outputs at all and relied on analog gauges that were read by operators on their rounds. We designed the data collection layer in three tiers to match this reality. For digitally-connected equipment, we deployed lightweight data collectors that read sensor values from the PLC over the existing plant network on a one-second polling interval. For serial-connected equipment, we installed protocol converters that translated serial output to a network-addressable format. For analog equipment, we installed retrofit sensor kits — vibration sensors, current clamps, and temperature sensors — that added digital sensing capability without requiring modifications to the machine's control systems. The three collection tiers feed into a common data pipeline. From the analytics platform's perspective, every machine looks the same regardless of its age or interface type.",
      },
      {
        heading: "Building prediction models without touching production schedules",
        text: "We spent the first eight weeks collecting baseline data without building any prediction models. Every machine in all four facilities contributed sensor data to the baseline. We needed to understand what normal operation looked like for each machine under the full range of production conditions: different materials, different feed rates, different ambient temperatures, different load profiles. A machine that runs hot in summer and cool in winter isn't a machine with a problem — it's a machine responding normally to its environment. Without a baseline that accounted for these variables, any model we built would produce excessive false positives whenever normal seasonal variation pushed a sensor reading outside of a naive threshold. The baseline data also revealed something the plant engineering team hadn't expected: five machines across the four facilities were already operating in patterns that the engineers, upon examination, associated with conditions they'd seen before failures in similar equipment. Those five machines were pulled for early inspection before any prediction model was in production. Two of them had developing faults that would have caused failures within the following few weeks.",
      },
      {
        heading: "Calibrating thresholds and eliminating alert fatigue",
        text: "Alert fatigue is the most common reason predictive maintenance programs fail in practice. A system that generates too many alerts produces a maintenance team that ignores alerts. We calibrated the alert thresholds through a structured process: for each machine, we defined alert levels based on the statistical distance of a current reading from the established baseline — a mild deviation generated a watch alert visible only on the dashboard, a moderate deviation generated a notification to the maintenance team, and a severe deviation generated an immediate page to the plant engineer on duty. We tuned these thresholds over a sixteen-week period by tracking every alert, its urgency classification, and its outcome. Alerts that led to findings when a maintenance technician investigated were confirmed as correctly calibrated. Alerts that led to no finding were reviewed — some were reduced in sensitivity, some led us to improve the baseline model to account for a variable we'd missed. At the end of the calibration period, the false positive rate was under 8% — meaning that more than nine out of ten alerts led to a genuine finding when investigated.",
      },
      {
        heading: "First year results across all four facilities",
        text: "In the twelve months following full deployment across all four facilities, unplanned equipment downtime dropped from an average of 340 hours per facility to 89 hours per facility — a 74% reduction. The remaining downtime was predominantly attributable to equipment categories that hadn't been included in the initial deployment due to the difficulty of retrofitting sensor packages on certain older machine types; those machines are being addressed in the second phase of the program. The average advance warning time between the first alert on a developing fault and the subsequent equipment failure — measured on cases where the maintenance team chose to monitor rather than immediately intervene — was six hours. In practice, most alerts lead to same-shift or next-shift maintenance intervention, which means failures are being caught and addressed well within the warning window. The maintenance team's scheduled maintenance workload has been restructured: machines that show no precursor signals approaching their scheduled service interval are rescheduled for a later date, freeing maintenance capacity for condition-triggered interventions. Scheduled maintenance hours have decreased by 22% while actual machine health has improved.",
      },
    ],
  },

  "energy-grid-security": {
    title: "Securing power grid systems during a live modernization project",
    industry: "Grid Security",
    client: "Energy & Utilities",
    summary:
      "A regional utility with 1.4 million customers was two years into a grid modernization program when its internal security team raised concerns about the pace of connectivity being added to operational technology systems. Smart meters, distribution automation equipment, and grid sensors were being connected to communication networks as part of the modernization — each one a potential entry point into systems that controlled physical infrastructure. The utility's NERC CIP compliance program covered its highest-voltage transmission assets but left significant coverage gaps in the distribution systems where most of the new connectivity was being added.",
    result:
      "We built a security program that moved at the same pace as the modernization, adding visibility and controls to each system as it was connected rather than trying to retrofit security across all systems at once.",
    metrics: [
      { value: "100%", label: "NERC CIP compliance maintained" },
      { value: "2,400+", label: "OT assets monitored" },
      { value: "Zero", label: "Operational disruptions" },
    ],
    body: [
      {
        heading: "NERC CIP compliance is not the same as being secure",
        text: "The utility's NERC CIP program was well-run. Its high-voltage transmission assets — the substations and transmission equipment that NERC CIP primarily covers — were inventoried, assessed, and monitored. The compliance team maintained the documentation required for audit and had a track record of clean audit outcomes. The security problem was in the systems that NERC CIP doesn't comprehensively address: the distribution automation equipment, the smart meter communication networks, and the SCADA systems managing distribution-level switching. These systems were being connected to IP networks as part of the modernization program. Most of them had no built-in security logging. Many were running operating systems that hadn't received security updates in years because the vendors hadn't provided updates and the utility hadn't replaced equipment that was still functionally operational. The attack surface was growing faster than the security program's coverage.",
      },
      {
        heading: "A visibility-first approach to active infrastructure",
        text: "The first principle we established with the utility's security and operations teams was that we would add visibility before we added controls. In an operational technology environment, a security control that fails in an unplanned way can have consequences that range from a service interruption to a physical safety incident. The risk of a poorly-deployed security control was, in some configurations, higher than the risk from the security gap the control was intended to address. Passive network monitoring — listening to network traffic without inserting any device into the communication path — was the starting point for every system. We deployed passive sensors on the communication networks serving the distribution automation equipment, the smart meter head-end systems, and the SCADA historian network. The sensors recorded all communication patterns without affecting them. Within eight weeks, we had a comprehensive traffic baseline for each network segment and a complete device inventory derived from the communication patterns — more complete than the utility's existing asset inventory, which had been built manually and was approximately eighteen months out of date.",
      },
      {
        heading: "Adding controls without stopping the grid",
        text: "Security controls were introduced to each system in a sequence designed to minimize operational risk. The first controls added to each network segment were detection-only: rules that generated alerts when communication patterns deviated from the baseline, but didn't block any traffic. Detection-only controls introduced no operational risk because they couldn't affect the network traffic they monitored. The maintenance team evaluated each alert category during a six-week period and confirmed which deviations represented real anomalies and which represented normal operational variation that the baseline hadn't captured. Only after the detection rules were calibrated to an acceptable false positive rate did we introduce blocking controls — and even then, blocking controls were introduced one system at a time, with operations teams present for the initial deployment period on each system. This approach was slower than deploying controls across all systems simultaneously would have been. It was the approach that the operations team would accept, and the operations team's acceptance was the prerequisite for any security improvement in an environment where their cooperation was required for the controls to be correctly scoped.",
      },
      {
        heading: "Evidence packages that reflect how the systems actually work",
        text: "A recurring problem in utility NERC CIP compliance programs is that the documentation required for audit doesn't match how the systems actually operate. Access control lists in the audit documentation don't match the access control lists deployed on the equipment. Network diagrams don't include systems that were added after the diagram was last updated. Asset inventories don't include equipment installed during maintenance activities that didn't go through the formal change management process. Auditors see clean documentation; the actual systems have gaps. We built the compliance documentation program from the monitored data rather than from manual documentation processes. The network diagrams were generated from the passive monitoring data: every device that communicated on a monitored network segment appeared in the diagram automatically. The asset inventory was maintained by the monitoring system: a new device appearing on a network segment triggered a review and, if confirmed as an authorized asset, was added to the inventory. The access control lists were validated quarterly by comparing the rules deployed on equipment against the rules recorded in the compliance documentation — discrepancies triggered a reconciliation before the next audit cycle.",
      },
      {
        heading: "Where the program stands today",
        text: "Thirty months after the program began, the utility's security coverage includes 2,400 operational technology assets across its transmission and distribution infrastructure — significantly more than were in scope when the program started, because the modernization program has continued to connect additional equipment. The NERC CIP compliance program has received clean audit outcomes in each of the two audit cycles completed since the program began. More practically, the security operations team has detected and responded to eleven genuine security events in the monitored infrastructure during this period — seven of which were contractors accessing systems outside their authorized windows, three of which were misconfigured devices attempting to communicate with addresses outside their expected scope, and one of which was a confirmed attempt to access the SCADA historian from an external IP address that was blocked automatically by the network controls and reported to law enforcement. None of these events resulted in an operational disruption.",
      },
    ],
  },

  "financial-core-modernization": {
    title: "Replacing an aging core banking system with no customer-facing downtime",
    industry: "Legacy Modernization",
    client: "Financial Services",
    summary:
      "A mid-sized Canadian bank had been running its core banking system on a platform that the vendor was retiring. Extended support was available but expensive and time-limited. The bank's technology leadership had assessed three migration paths: a vendor-recommended big-bang cutover, a phased migration over five years using the extended support period, and a strangler fig approach that would migrate functionality incrementally while keeping both systems operational. The vendor's recommended cutover had been modelled at 72 hours of system unavailability. The bank's customer agreement commitments made that window impossible.",
    result:
      "We implemented the strangler fig migration — running both systems in parallel, incrementally shifting customer accounts to the new system, and decommissioning the old system only after every account had been verified on the new platform. The entire migration took 26 months. Customers experienced no downtime.",
    metrics: [
      { value: "Zero", label: "Hours of customer-facing downtime" },
      { value: "26 months", label: "Total migration duration" },
      { value: "100%", label: "Account verification before cutover" },
    ],
    body: [
      {
        heading: "Why the vendor's recommended approach wasn't an option",
        text: "The vendor's big-bang cutover plan had been designed for customers with more operational flexibility than a retail bank. The plan required taking the core system offline for 72 hours to migrate all customer data, run reconciliation, and bring up the new system. The bank's service level agreements with its commercial customers — corporate clients with real-time payment requirements, payroll processing obligations, and cash management operations — made 72 hours of system unavailability a contract breach, not an operational inconvenience. The vendor's plan also assumed that the migration would be clean: that every account record would migrate without error, that every balance would reconcile, and that no customer would need to access their account during the cutover window. The bank's technology team had significant doubts about all three assumptions. The existing core system had accumulated thirty years of schema variations, exception handling patches, and data quality issues that had never been fully catalogued. A clean migration of a 30-year-old core banking database in 72 hours was not a realistic expectation.",
      },
      {
        heading: "The strangler fig pattern at banking scale",
        text: "The strangler fig migration pattern gets its name from the fig tree that grows around an existing structure, gradually replacing it while the original structure continues to function. Applied to banking, the approach works as follows: the new core banking system is deployed and operates in parallel with the existing system. Customer accounts are migrated in cohorts — groups of accounts moved from the old system to the new system in a planned sequence. After migration, each cohort's accounts are served by the new system. The old system continues to operate for the accounts not yet migrated. The two systems exchange data to maintain consistency on accounts that interact across the boundary — a payment from a migrated account to an unmigrated account, for example. Over time, the proportion of accounts on the new system grows until the last cohort has been migrated, at which point the old system is decommissioned. The complexity of this approach is in the data synchronization layer that keeps both systems consistent while the migration is in progress.",
      },
      {
        heading: "Building the synchronization layer",
        text: "The synchronization layer was the most technically demanding part of the migration. Every transaction that touched the boundary between the two systems — a payment, a transfer, a fee — had to be recorded in both systems without double-counting. We built the synchronization layer as an event-driven system: every transaction on either core system produced an event, and the synchronization layer consumed those events and applied the corresponding update to the other system. The challenge was idempotency: network failures and system restarts meant that events could be delivered more than once, and applying a transaction twice would corrupt account balances. We implemented idempotency keys on every synchronization event — a unique identifier that allowed each system to detect and discard duplicate events — and ran a daily reconciliation process that compared account balances across both systems for accounts with cross-boundary activity. Discrepancies in the daily reconciliation triggered an immediate review before the next business day. There were forty-one reconciliation discrepancies across the entire 26-month migration period. Each was identified, investigated, and resolved before it affected the customer. None reached the customer.",
      },
      {
        heading: "The account migration sequence and verification process",
        text: "We divided the bank's 840,000 customer accounts into migration cohorts based on account complexity: simpler accounts first, more complex accounts later. The first cohorts contained individual savings and chequing accounts with straightforward transaction histories. The final cohorts contained commercial accounts with complex product structures, automated payment arrangements, and covenant monitoring requirements. Each cohort was migrated on a Sunday morning, when transaction volume was lowest. The migration process for each cohort consisted of: extracting the account data from the old system, transforming it to the new system's data model, loading it into the new system, running a suite of automated verification checks against both systems to confirm that balances, transaction histories, and product configurations matched, and then switching the routing for those accounts to the new system. The automated verification suite ran more than 200 checks per account. Any account that failed a verification check was not migrated on that Sunday — it was flagged for manual review and included in a later cohort after the discrepancy was resolved.",
      },
      {
        heading: "Decommissioning the old system",
        text: "When the last cohort of accounts had been migrated and verified, the old system still ran in read-only mode for 90 days before decommissioning. During those 90 days, the synchronization layer was disabled — no new transactions were written to the old system — but the old system remained accessible for audit queries, regulatory reporting that referenced historical data, and any disputes that required access to transaction records predating the migration. At the end of the 90-day period, the old system was archived: a complete snapshot of the database was taken and stored in long-term archival storage for the seven-year retention period required by the bank's regulatory obligations, and the live environment was decommissioned. The total infrastructure cost of the parallel-running period — operating two core banking systems simultaneously for 26 months — was $4.2 million more than a big-bang cutover would have cost. The bank's risk management committee had approved that cost premium as appropriate given the alternative, which was a migration approach with meaningful probability of a customer-facing incident during one of the most operationally sensitive periods in the bank's recent history.",
      },
    ],
  },

  "financial-ai-compliance": {
    title: "Getting AI to work in compliance workflows at scale",
    industry: "AI & Compliance",
    client: "Financial Services",
    summary:
      "A bank's compliance function was processing 180,000 transaction monitoring alerts per month, of which fewer than 2% resulted in a filed suspicious activity report. The remaining 98% consumed analyst time that could have been spent on genuinely suspicious activity. The compliance leadership had evaluated AI solutions from three vendors, all of whom had demonstrated impressive accuracy rates in controlled demos. When those same vendors were asked to show the models running on the bank's actual transaction data, none of them could — because the bank's data infrastructure wasn't in a state that any of the models could consume.",
    result:
      "We built the data infrastructure that the AI required before we touched the models. Twelve months later, the transaction monitoring alert volume was down 71% with no decrease in SAR filing accuracy. The compliance team handles the same caseload with 40% fewer analyst hours.",
    metrics: [
      { value: "71%", label: "Reduction in false-positive alerts" },
      { value: "40%", label: "Fewer analyst hours per month" },
      { value: "99.1%", label: "SAR decision accuracy maintained" },
    ],
    body: [
      {
        heading: "The AI readiness gap in financial compliance",
        text: "Transaction monitoring AI requires two things that most banks don't have: clean, consistently-structured transaction data, and labelled historical data that tells the model which past alerts were genuine and which were false positives. The bank had transaction data — it had fifteen years of it — but the data was distributed across four different core banking systems that had been consolidated over time, each with a different schema and a different set of transaction type codes. A wire transfer in System A was coded differently than a wire transfer in System B. The consolidation projects had mapped the codes at the time, but the mapping tables hadn't been maintained as the systems evolved, and some categories of transaction were classified inconsistently across systems. The labelled historical data was worse: analyst decisions on historical alerts were stored in a case management system that had been replaced twice, and the decision records in the current system only went back four years. The decisions made on the previous eleven years of alerts were in a decommissioned system that was accessible only through a read-only interface with a response time measured in minutes per query.",
      },
      {
        heading: "Building a unified transaction data layer",
        text: "The first six months of the engagement were spent building the data infrastructure, not the AI. We built a unified transaction data model that represented transaction types consistently regardless of which legacy system had originated the record. The model had 43 canonical transaction types, each with a defined mapping from the type codes used in each of the four source systems. We built a data pipeline that read from all four source systems — including the decommissioned read-only system — and transformed every transaction record into the canonical model. The pipeline ran on a 15-minute cadence for current transactions and ran historically over a six-month period to backfill the unified data store with fifteen years of transaction history. The backfill took eleven weeks because the decommissioned system's response time limited the throughput of historical data extraction. By the end of the backfill, the unified data store contained 2.3 billion transaction records in a consistent format for the first time in the bank's history.",
      },
      {
        heading: "Labelling historical alert decisions for model training",
        text: "The labelled training data problem required a different approach. We couldn't recover the decision records from the decommissioned case management systems — the data was there but extracting eleven years of records at the system's query speed would have taken longer than the engagement. Instead, we built training labels from the data we did have. The current case management system had four years of decision records: for each alert, whether the analyst had escalated to a filed SAR or closed the alert as a false positive. We combined these decision records with the behavioural features of the transactions that generated each alert — the transaction amount, the counterparty, the transaction type, the customer's historical pattern — to build a feature set that represented each alert at the time it was generated. The model was trained to predict, given the features of an alert, whether it was likely to result in a SAR filing. We validated the training data by having the compliance team's senior analysts review a sample of the training labels — the cases where the model's prediction was most uncertain — to confirm that the historical decisions reflected the bank's current SAR filing standards. Fourteen percent of the reviewed labels required correction, which was higher than expected and led to a manual review of the highest-uncertainty training cases before model training began.",
      },
      {
        heading: "Production deployment and the governance framework",
        text: "We deployed the model in a shadow mode for eight weeks before it began influencing alert triage. In shadow mode, the model scored every alert but its score was not shown to analysts — analysts worked the alerts in their standard way, and at the end of each day we compared the model's scores to the analyst decisions. The shadow mode data showed that the model agreed with analyst decisions on 91.3% of alerts, and that in the cases where they disagreed, the analyst's decision was more often correct than the model's on high-value alerts and the model was more often correct than the analyst on low-value, high-volume alerts. This finding shaped the governance framework for live deployment: the model's scores influence — but do not determine — the triage priority of each alert. Alerts scored as high confidence genuine by the model are elevated in the queue; alerts scored as high confidence false positive are deprioritized but not suppressed. Analysts review all alerts; the model's role is to sequence the queue so that analyst attention goes first to the alerts most likely to require action. The compliance team's internal audit function reviews a sample of deprioritized alerts each month to confirm that genuine suspicious activity isn't being systematically deprioritized — this review has found no cases in the 18 months since live deployment began.",
      },
      {
        heading: "Model performance, auditability, and what came next",
        text: "In the eighteen months since live deployment, the transaction monitoring alert volume has declined from 180,000 per month to 52,000 per month — a 71% reduction — while the number of SARs filed per month has remained stable. The reduction in alert volume reflects the model's improved ability to filter genuine activity from suspicious activity at the point of alert generation, not just at the triage stage. The compliance function's regulators reviewed the AI program during a scheduled examination and found the governance framework — the shadow mode validation, the audit review process, the model explainability documentation — to be consistent with their guidance on model risk management. The bank has since extended the AI program to two additional compliance workflows: customer due diligence refresh and correspondent banking transaction monitoring, both of which are in shadow mode deployment as of the most recent programme review.",
      },
    ],
  },

  "manufacturing-ot-security": {
    title: "Securing factory floor systems without stopping production",
    industry: "Factory Floor Security",
    client: "Manufacturing",
    summary:
      "A manufacturing group with six facilities across Ontario and Quebec had no formal operational technology security program. An acquisition had brought in a facility whose IT systems were found to have been compromised during the due diligence process — the compromise had spread from IT systems to the facility's production network, and the group's security team had spent three weeks remediating it. The incident had revealed that the group had no visibility into its OT networks, no baseline of what normal looked like, and no means of detecting or containing a similar incident at its other five facilities.",
    result:
      "We built a monitoring and segmentation program that started with observation only — no changes to production systems — and added controls progressively as the operations teams gained confidence in the approach.",
    metrics: [
      { value: "6", label: "Facilities fully monitored" },
      { value: "Zero", label: "Production disruptions during deployment" },
      { value: "11 weeks", label: "From first sensor to full visibility" },
    ],
    body: [
      {
        heading: "OT security is fundamentally different from IT security",
        text: "The first conversation we had with the group's security team was about the constraints that made OT security different from IT security. In an IT environment, the worst-case outcome of a security control that fails is a service disruption — applications go offline, users can't work, and the help desk receives calls. In an OT environment, the worst-case outcome of a security control that fails in the wrong way can be a production line stopping, a machine receiving a command it wasn't designed to handle, or a safety system being isolated from the equipment it monitors. These are not acceptable outcomes. The security program had to be designed around the operational risk of the security controls themselves, not just around the threat from external actors. This shaped every decision we made: passive before active, observation before enforcement, operations teams as approvers of every change, and an explicit commitment that any control we deployed could be removed within 30 minutes if it caused an unplanned operational effect.",
      },
      {
        heading: "The monitoring-first approach across six facilities",
        text: "We deployed passive network monitoring at all six facilities over an eleven-week period. Passive monitoring sensors connect to network switch mirror ports — they see a copy of all network traffic but inject nothing onto the network and are not in the path of any communication. A sensor failure leaves the network completely unaffected. At each facility, we connected sensors to the main production network and to each identified network segment: the PLC networks serving each production line, the historian network that collected data from the PLCs, and the demilitarized zone where any connections between the production network and the enterprise IT network existed. Within 48 hours of sensor deployment at each facility, we had a complete picture of what devices existed on the network — more complete than the asset inventories the facilities maintained manually, which were consistently 15–25% incomplete. Within two weeks, we had baseline traffic patterns for each facility: which devices communicated with which, on which protocols, at which frequencies, and which external addresses any devices connected to.",
      },
      {
        heading: "What the monitoring revealed before any controls were deployed",
        text: "The baseline monitoring period surfaced findings at every facility that the group's security team had not expected. At Facility 2, a production line PLC was sending SMTP traffic to an external mail server — a communication pattern that had no legitimate operational purpose and was consistent with an infected device attempting to exfiltrate data or reach a command-and-control server. Investigation revealed that the PLC's engineering workstation had been compromised by malware that had been dormant for an estimated fourteen months. At Facility 4, a device identified as a building management controller was communicating directly with the production historian — a connection that bypassed the intended network segmentation and represented a path through which a compromise of the building management system could reach production data. At Facility 6, three PLCs were running outdated firmware with known vulnerabilities that had been patched by the vendor in updates that had never been applied. None of these findings had been known before the monitoring program began. All were addressed before any network controls were deployed.",
      },
      {
        heading: "Network segmentation in controlled phases",
        text: "After eight weeks of monitoring and baseline establishment, we began the network segmentation program. The segmentation approach divided each facility's OT network into zones based on operational criticality and communication requirements: safety instrumented systems in their own isolated zone, production control systems in production zones organized by line, and engineering access systems in a separate zone with controlled bridging to the production zones. Each zone boundary was implemented using industrial firewalls configured to pass only the communication relationships that the baseline monitoring had confirmed as legitimate. We deployed the zone boundaries one facility at a time, with operations leadership at each facility present for the initial activation of each boundary. The first 48 hours after each boundary activation were treated as a validation period: monitoring confirmed that legitimate production communications were flowing normally, and the firewall logs were reviewed for any blocked traffic that might indicate a communication relationship that had been missed in the baseline analysis. Two facilities required configuration adjustments during their validation periods — both cases where a communication relationship existed that the baseline monitoring had categorized as low-frequency and which the firewall rules had incorrectly blocked. Both were resolved within the validation window without production impact.",
      },
      {
        heading: "The sustained security posture",
        text: "Twelve months after the monitoring program began and eight months after the last facility completed its segmentation deployment, the group's OT security program is fully operational. The monitoring system generates alerts on any communication pattern that deviates from the baseline — new devices appearing on production networks, communications on unexpected ports, connections to external addresses that weren't in the baseline. The security operations team reviews OT alerts during business hours, with an on-call engineer available for critical-severity alerts outside business hours. In the eight months since the segmentation was completed, the program has detected and responded to nineteen security events: twelve cases of unauthorized devices connected to production networks (all confirmed as legitimate equipment that had been connected without following the change management process), four cases of anomalous communication patterns that were attributed to misconfigured equipment, two cases of contractor laptops connecting to production network segments they weren't authorized to access, and one case of a PLC attempting to communicate with an external IP address that was blocked by the segmentation controls and is under ongoing investigation.",
      },
    ],
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function estimateReadTime(body: { text: string }[]): number {
  const words = body.reduce((acc, b) => acc + b.text.split(/\s+/).length, 0)
  return Math.max(5, Math.ceil(words / 220))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const dbProject = await db.project.findUnique({
      where: { slug, status: "published" },
      select: { title: true, description: true },
    })
    if (dbProject) return { title: dbProject.title, description: dbProject.description }
  } catch { /* DB unavailable */ }

  const cs = hardcodedCaseStudies[slug]
  if (!cs) return { title: "Not Found" }
  return { title: cs.title, description: cs.summary }
}

export function generateStaticParams() {
  return Object.keys(hardcodedCaseStudies).map((slug) => ({ slug }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params

  // ── 1. Try the database ───────────────────────────────────────────────────
  let dbProject: Awaited<ReturnType<typeof db.project.findUnique>> = null
  try {
    dbProject = await db.project.findUnique({ where: { slug, status: "published" } })
  } catch { /* DB unavailable */ }

  if (dbProject) {
    const tags = JSON.parse(dbProject.tags || "[]") as string[]
    const publishedDate = dbProject.publishedAt
      ? new Date(dbProject.publishedAt).toLocaleDateString("en-CA", {
          year: "numeric", month: "long", day: "numeric",
        })
      : null

    return (
      <>
        <PageHero
          breadcrumbs={[{ label: "Use Cases", href: "/case-studies" }, { label: dbProject.industry ?? dbProject.client ?? "Case Study" }]}
          eyebrow={dbProject.industry ?? "Case Study"}
          title={dbProject.title}
          variant="tinted"
        />
        <section className="bg-white py-16 dark:bg-background lg:py-24">
          <div className="container-enterprise">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
              <div>
                {publishedDate && (
                  <div className="mb-8 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {publishedDate}
                    </div>
                    {tags.map((t) => (
                      <span key={t} className="rounded-full bg-blue-light px-2.5 py-0.5 text-[11px] font-semibold text-blue">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mb-10 text-lg leading-8 text-foreground">{dbProject.description}</p>
                {dbProject.content && (
                  <div className="border-t border-border pt-10 text-base leading-8 text-muted-foreground whitespace-pre-wrap">
                    {dbProject.content}
                  </div>
                )}
                <div className="mt-12 border-t border-border pt-8">
                  <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    All use cases
                  </Link>
                </div>
              </div>
              <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-xl border border-border bg-surface p-5 dark:bg-card">
                  <p className="mb-4 text-sm font-semibold text-foreground">Facing a similar challenge?</p>
                  <p className="mb-4 text-xs leading-5 text-muted-foreground">We work through the technical and operational specifics with your team — no commitment required.</p>
                  <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover">
                    Talk to an engineer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <CTASection
          title="Facing a similar infrastructure challenge?"
          subtitle="We're happy to have a technical conversation about your specific environment — no commitment required."
          primaryLabel="Schedule a call"
          primaryHref="/contact"
          secondaryLabel="View all use cases"
          secondaryHref="/case-studies"
        />
      </>
    )
  }

  // ── 2. Hardcoded use cases ────────────────────────────────────────────────
  const cs = hardcodedCaseStudies[slug]
  if (!cs) notFound()

  const readTime = estimateReadTime(cs.body)

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Use Cases", href: "/case-studies" }, { label: cs.client }]}
        eyebrow={cs.industry}
        title={cs.title}
        variant="tinted"
      />

      {/* ── Metadata bar ── */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise flex flex-wrap items-center gap-x-6 gap-y-2 py-4">
          <span className="rounded-full bg-blue-light px-3 py-1 text-[11px] font-semibold text-blue">
            {cs.industry}
          </span>
          <span className="text-xs text-muted-foreground">{cs.client}</span>
          <span className="text-xs text-muted-foreground">{readTime} min read</span>
        </div>
      </div>

      {/* ── KPI strip ── */}
      {cs.metrics && cs.metrics.length > 0 && (
        <div className="bg-canvas">
          <div className="container-enterprise">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {cs.metrics.map((m) => (
                <div key={m.label} className="px-8 py-10">
                  <p className="font-mono text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-2.5 text-sm text-white/50">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Article ── */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16 xl:gap-20">

            {/* ── Main content column ── */}
            <div>
              {/* Lead paragraph */}
              <p className="mb-12 text-lg leading-9 text-foreground">
                {cs.summary}
              </p>

              {/* Outcome callout */}
              <div className="mb-14 flex gap-4 rounded-xl border-l-4 border-blue bg-blue-light py-5 pl-6 pr-6 dark:bg-blue/10">
                <div>
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-blue">
                    The outcome
                  </p>
                  <p className="text-base leading-7 font-medium text-foreground">{cs.result}</p>
                </div>
              </div>

              {/* Body sections — numbered */}
              <div>
                {cs.body.map((block, i) => (
                  <div key={i} className="border-t border-border py-12">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-widest text-blue/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h2 className="mb-5 text-xl font-semibold tracking-tight text-foreground">
                      {block.heading}
                    </h2>
                    <p className="text-base leading-8 text-muted-foreground">{block.text}</p>
                  </div>
                ))}
              </div>

              {/* Back link */}
              <div className="mt-4 border-t border-border pt-10">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All use cases
                </Link>
              </div>
            </div>

            {/* ── Sticky sidebar ── */}
            <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">

              {/* Table of contents */}
              <div className="rounded-xl border border-border bg-surface p-5 dark:bg-card">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  In this case study
                </p>
                <ul className="space-y-3">
                  {cs.body.map((block, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0 font-mono text-[10px] font-semibold text-blue/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs leading-5 text-muted-foreground">{block.heading}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The challenge */}
              <div className="rounded-xl bg-canvas p-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  The challenge
                </p>
                <p className="text-sm leading-7 text-white/75">{cs.summary}</p>
              </div>

              {/* CTA */}
              <div className="rounded-xl border border-border bg-surface p-5 dark:bg-card">
                <p className="mb-1.5 text-sm font-semibold text-foreground">Facing a similar challenge?</p>
                <p className="mb-4 text-xs leading-5 text-muted-foreground">
                  We work through the technical and operational specifics with your team — no commitment required.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                >
                  Talk to an engineer
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  View all use cases
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Facing a similar infrastructure challenge?"
        subtitle="We're happy to have a technical conversation about your specific environment — no commitment required."
        primaryLabel="Schedule a call"
        primaryHref="/contact"
        secondaryLabel="View all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
