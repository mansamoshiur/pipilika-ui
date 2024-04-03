import { defineConfig } from "rollup";
import typesctript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "pipilika-ui",
  },
  external: ["react", "react-dom"],
  plugins: [typesctript({ tsconfig: "tsconfig.json" })],
});
