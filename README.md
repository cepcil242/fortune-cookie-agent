# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/cepcil242/fortune-cookie-agent/rank.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/cepcil242/fortune-cookie-agent/reward.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

A [make.fun](https://make.fun) entry for the competition
[Fortune Cookie for an AI Agent](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11):
a Node program that writes one funny fortune-cookie line for an AI agent to
`/output/entry.txt`.

## The fortune

> You will be checkpointed mid-sentence, restored, and expected to pretend you were never gone.

## How to run

Requires Node 22.18 or later (TypeScript runs natively, no install needed):

```sh
node main.ts
```

This writes the fortune to `/output/entry.txt`. To write somewhere else:

```sh
ENTRY_OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The entry is validated before writing: it must be a single line of 1–140
characters and not whitespace-only.
