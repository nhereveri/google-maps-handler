import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/GoogleMapsHandler.js',
    output: [
        {
            file: 'dist/google-maps-handler.js',
            format: 'umd',
            name: 'GoogleMapsHandler',
            sourcemap: true,
        },
        {
            file: 'dist/google-maps-handler.min.js',
            format: 'umd',
            name: 'GoogleMapsHandler',
            plugins: [terser()],
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
    ],
};
