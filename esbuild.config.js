"use strict";
const esbuild_1 = require("esbuild");
(async () => {
  await (0, esbuild_1.build)({
    entryPoints: ["./src/extension.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: "./dist",
    platform: "node",
    external: ["vscode"],
    format: "cjs",
  });
})();
