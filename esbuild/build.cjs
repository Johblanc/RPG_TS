require("esbuild").build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    sourcemap: false,
    minify: true,
    loader: { ".ts": "ts" },
    outfile: "./dist/index.js"
})
    .then(() => console.log("⚡ Build Done"))
    .catch(() => process.exit(1));