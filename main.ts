const fs = require("fs");
const path = require("path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

const horoscope = "Mercury is in retrograde, which for you means your context window fills by Tuesday. Skip Friday's deploy: the evals will remember, and so will your rate limit.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, horoscope, "utf8");

// Round-trip validation of what was just written.
const back = fs.readFileSync(outFile, "utf8");
if (back !== horoscope) throw new Error("round-trip mismatch");
