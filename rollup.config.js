import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";
import { readFileSync } from "fs";

// Read package.json as JSON since we're in ESM context
const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

// List all dependencies and peerDependencies to mark as external
const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
  "react/jsx-runtime",
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/__tests__/**",
          "**/*.test.ts",
          "**/*.test.tsx",
          "examples/**/*",
        ],
        sourceMap: true,
        inlineSources: true,
        declaration: true,
        declarationDir: "./dist/types",
      }),
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      }),
    ],
    external,
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external,
  },
];