// List upcoming NFT mints from mints.json, sorted by date. Example entries are skipped.
import { readFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("./mints.json", import.meta.url), "utf8"));
const now = Date.now();
const upcoming = data.mints
  .filter((m) => !m.example)
  .map((m) => ({ ...m, start: new Date(m.date).getTime() }))
  .filter((m) => !Number.isNaN(m.start) && m.start >= now)
  .sort((a, b) => a.start - b.start);

if (upcoming.length === 0) {
  console.log("No upcoming mints. Add real entries to mints.json.");
} else {
  for (const m of upcoming) {
    const price = m.price === 0 ? "FREE + gas" : String(m.price);
    console.log(m.date + " | " + m.name + " | " + m.chain + " | " + price + " | " + (m.phase || "phase TBA"));
  }
}
