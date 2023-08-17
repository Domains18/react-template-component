import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import packagejson from('./package.json');

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packagejson.main,
                format: "cjs",
                sourcemap: true,
            },
            
            {
                file: packagejson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: ({ file: "dist/index.d.td", format: 'esm' }),
        plugin: [dts()]
    }
]   
