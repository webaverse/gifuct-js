import commonjs from "@rollup/plugin-commonjs";
import {nodeResolve} from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';

const output = {
  dir: 'dist',
  format: 'es'
};
const plugins = [
  commonjs({
    // non-CommonJS modules will be ignored, but you can also
    // specifically include/exclude files
    include: [ "./index.js", "node_modules/**" ], // Default: undefined

    // if true then uses of `global` won't be dealt with by this plugin
    ignoreGlobal: false, // Default: false

    // if false then skip sourceMap generation for CommonJS modules
    sourceMap: false, // Default: true

    extensions: [ '.js', '.cjs' ],
  }),
  nodeResolve({
    preferBuiltins: false,
  }),
  globals(),
  builtins(),
  json(),
];

export default [
  'index',
  // 'runtime',
  // 'compile',
  // 'babel-standalone',
  // 'jszip',
  // 'jsx-tmpl',
].map(n => {
  return {
    input: 'src/' + n + '.js',
    output,
    plugins,
  };
});
