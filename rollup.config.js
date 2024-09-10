import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', exclude: ["examples/**/*"] }),
            postcss({
                modules: true,
                extract: false,
                inject: true,
                use: ['sass'],
            }),
        ],
        external: ['react', 'react-dom']
    },
    {
        input: 'examples/index.ts',
        output: {
            file: 'dist/examples.js',
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', include: ["examples/**/*", "src/**/*"] }),
            postcss({
                modules: true,
                extract: false,
                inject: true,
                use: ['sass'],
            }),
        ],
        external: ['react', 'react-dom'],
    },
];