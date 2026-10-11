---
title: HotWax launches Job Manager V2, a Maarg-first control plane for integration operations
slug: product-updates/2026-06/hotwax-launches-job-manager-v2-a-maarg-first-control-plane-for-integration-operations
contentType: product-update
month: 2026-06
metaDescription: Integration operations depend on scheduled jobs, files, system messages, reports, and configuration records. When those tools are scattered across generic admi…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-launches-job-manager-v2-a-maarg-first-control-plane-for-integration-operations
sourceFaq: job-manager-v2-overall.md
---

### A focused control plane for integration work

Integration operations depend on scheduled jobs, files, system messages, reports, and configuration records. When those tools are scattered across generic admin screens, support teams spend too much time translating framework details into operational action.

Job Manager V2 brings the four surfaces teams use to monitor and investigate those flows into one Maarg-first workspace: an integration dashboard, Data Manager, System Messages, and DataDocuments.

### Start with a dashboard that shows where attention is needed

The dashboard gives operations users a real-time summary across job schedules, file ingestion, and System Messages. It surfaces paused and unscheduled jobs, stuck, failed, and slow runs, high-priority and standard ingestion failures, incoming and outgoing message errors, queue depth, average processing time, actionable errors, and recent activity. Rather than beginning in a subsystem, the team can begin with the exception and drill into the related job, file log, or message.

### Make file processing auditable in Data Manager

Data Manager and File History turn file ingestion into an inspectable operating record. Teams can search logs by ID or file name; filter by status, priority, error state, and configuration; review success rate and processing time; cancel an eligible pending log; and open the file detail to troubleshoot failed records. The dashboard keeps high-priority ingestion separate from routine processing so urgent files do not disappear in a general queue.

### Follow the payload journey through System Messages

System Messages make the integration record itself navigable. The monitor can be filtered by status, parent type, message type, remote system, and keyword; the detail view shows whether a message is inbound or outbound, its remote and type configuration, status journey, linked parent and child messages, operation sequence, payload content, files, errors, and permitted status actions. That matters because a scheduled job can finish while the payload it created still fails later in the delivery or consumption flow.

### Build and reuse operational reports with DataDocuments

DataDocuments are Job Manager's reporting and export pillar. Teams can define a reusable business view over the OMS entity model — its root entity, related records, fields, aliases, measures, and conditions — then validate it, preview live results, export a CSV, schedule recurring email exports, and review export history. A report definition can therefore become a shared operational asset rather than a one-off SQL request or custom screen.

### One operating surface for the integration day

Together, these pillars make Job Manager the place to see what needs attention, inspect the job, file, or payload behind it, and turn recurring operational questions into reusable reports. The app stays deliberately focused on HotWax integration work, so implementation, support, and operations teams have fewer reasons to fall back to broad framework administration.
