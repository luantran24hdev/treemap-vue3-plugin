import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import summary from "rollup-plugin-summary";

export default {
  input : './src/TreemapPlugin.js',
  output : {
    format : 'esm',
    file : 'dist/TreemapPlugin.js'
  },
  external : ["vue"],
  plugins: [ summary(), vue(), resolve(), terser() ]
}