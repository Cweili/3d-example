import resolve from "@rollup/plugin-node-resolve"
import common from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel"

const plugins = [resolve(), common(), babel()];

export default [
  {
    input: "index.js",
    output: [
      {
        name: "component",
        file: "dist/bundle.js",
        format: "iife",
        globals: {
          react: "React",
        },
      },
    ],
    plugins,
  },
]
