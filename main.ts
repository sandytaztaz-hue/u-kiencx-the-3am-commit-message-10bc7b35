import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: at 3am I renamed the bug to 'legacy behaviour' and closed the ticket; the bug has been promoted and now reviews my code";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  (() => {
    const i = process.argv.indexOf("--output");
    return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : "/output";
  })();

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
// entry.txt holds exactly the line above: no trailing newline, no extra bytes.
