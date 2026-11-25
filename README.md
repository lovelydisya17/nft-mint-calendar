# NFT Mint Calendar

Track upcoming NFT mints in a JSON calendar and list what is next with a tiny script.

## Usage

Edit `mints.json`, then run:

```sh
node list.mjs
```

Entries with `"example": true` are skipped. Only real entries you add yourself are listed.

## Entry fields

- `name` — project name
- `date` — mint start, ISO format with timezone, for example `2026-11-27T13:00:00+07:00`
- `chain` — chain name, for example `Robinhood`
- `price` — mint price, `0` means free plus gas
- `supply` — total supply, or null when unknown
- `phase` — `GTD`, `FCFS`, `Public`, or null
- `url` — official mint or project page
