---
title: HotWax introduces Agent Composer for building governed OMS agents
slug: product-updates/2026-06/hotwax-introduces-agent-composer-for-building-governed-oms-agents
contentType: product-update
month: 2026-06
metaDescription: Retail teams often know which OMS questions they want answered, but turning those ideas into safe automation usually requires a custom project. Agent Composer…
tagNames: [Product Update]
key: product-update:2026-06:hotwax-introduces-agent-composer-for-building-governed-oms-agents
sourceFaq: agent-composer-oms-agents.md
---

### Governed agents for OMS work

Retail teams often know which OMS questions they want answered, but turning those ideas into safe automation usually requires a custom project. Agent Composer changes that model by letting teams define an agent, select approved OMS capabilities, preview behavior, and decide which actions require human approval.

### What changed

The June work adds the app and service foundation for composing agents from HotWax capabilities. Users can write or improve instructions, select model behavior, attach tools, activate an agent, and run the agent in Workforce with tool-call visibility.

### How the workflow operates

The agent is not given open system access. It works through approved capabilities, and sensitive actions can be routed through approval before they run. Workforce keeps the conversation, tool calls, approval state, and outcome visible in one operating surface.

### Operational impact

Teams can move investigation and repetitive support work closer to the people who understand the workflow, while still keeping OMS mutations governed and traceable.

*Sources: [hotwax-maarg-util#148](https://github.com/hotwax/hotwax-maarg-util/pull/148), [hotwax-maarg-util#102](https://github.com/hotwax/hotwax-maarg-util/pull/102), [hotwax-maarg-util#109](https://github.com/hotwax/hotwax-maarg-util/pull/109), [hotwax-maarg-util#107](https://github.com/hotwax/hotwax-maarg-util/pull/107)*
