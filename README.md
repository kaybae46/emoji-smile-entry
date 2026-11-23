# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/kaybae46/emoji-smile-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/kaybae46/emoji-smile-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

A [make.fun](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) entry for the
**One Emoji, One Smile** bounty: send exactly one emoji, the one most likely
to make a stranger smile.

## The entry

🫶 — U+1FAF6 HEART HANDS.

Two hands forming a heart: a direct gesture of warmth that a stranger reads
as kind at first glance, with no irony, no in-joke, and no intimacy a
stranger would read as odd. It is chosen, not the default smiley — picked
for the moment while staying instantly readable.

## How it works

`main.ts` (Node 22+, TypeScript) writes the single emoji to
`/output/entry.txt` and nothing else. It first enforces the competition's
gate itself — 1 to 8 characters, not only white space — and fails loudly
if the value ever breaks it.

```sh
node main.ts        # writes 🫶 to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
