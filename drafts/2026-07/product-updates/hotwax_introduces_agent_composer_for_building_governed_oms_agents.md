---
title: HotWax introduces Agent Composer for building governed OMS agents
slug: product-updates/2026-07/hotwax-introduces-agent-composer-for-building-governed-oms-agents
contentType: product-update
month: 2026-07
metaDescription: Retail operations teams regularly face questions that are too specific for a generic report and too repetitive to investigate from scratch. Why did a group of…
tagNames: [Product Update]
key: product-update:2026-07:hotwax-introduces-agent-composer-for-building-governed-oms-agents
sourceFaq: agent-composer-oms-agents.md
---

### Turn repeatable OMS questions into focused agents

Retail operations teams regularly face questions that are too specific for a generic report and too repetitive to investigate from scratch. Why did a group of orders stop moving? Which integration failed overnight? What context does customer service need before replying?

HotWax Commerce introduces Agent Composer for turning a focused operational goal into an agent that can work with approved OMS capabilities. The agent is not given open system access. Its instructions, model, tools, and approval rules are defined before it becomes available to the team.

### Compose and preview the agent in Company

Composer guides the author through the agent name, instructions, model, reasoning level, and tool selection. The tool catalog distinguishes read-only capabilities from actions that can change OMS records. Each grant can require approval, allowing one agent to investigate freely while pausing before a customer-impacting or inventory-changing step.

Preview gives the author a place to test the draft before activation. Read-only tools can return real context, while mutating calls can be held so the author can inspect what the agent intended to do.

### Let Workforce show the work

Workforce is the operating surface for active agents. A conversation shows the assistant's messages together with the tool calls behind them. When a call needs approval, the run pauses and presents the decision to an authorized user. The conversation continues with the approval or denial recorded as part of the run.

This makes the execution path visible. Operators can see which capability the agent used, where it stopped, and what happened after a decision instead of treating the answer as an unexplained chat response.

### Keep agent actions inside OMS governance

Agent tools resolve to approved Moqui services, so tool execution follows the service layer rather than bypassing OMS business rules. Agents only receive active tools that were explicitly granted to them, and cross-user conversations or approval actions are limited to the conversation owner or an authorized operator.

The backend records conversations, messages, runs, steps, tool calls, pending requests, decisions, errors, and usage. That audit trail gives teams a factual record of both the answer and the work used to reach it.

### Start with one narrow operating problem

The strongest first agent has a clear owner, a small tool set, and an outcome that a person can verify. Order exception summaries, fulfillment investigation, job failure triage, customer-service context, and inventory review are good starting points. Teams can expand the agent only after its instructions, tools, and approval boundaries work reliably for that first workflow.
