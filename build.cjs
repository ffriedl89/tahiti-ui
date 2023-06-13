const {
  vanillaExtractPlugin
} = require('@vanilla-extract/esbuild-plugin');

const fg = require('fast-glob');

const files = fg.sync('./lib/**/*.{tsx,ts}')

const esbuild = require('esbuild');

async function main() {
  const esm = esbuild.build({
    entryPoints: files,
    bundle: false,
    plugins: [],
    outdir: 'dist/esm',
    format: 'esm',
  });

  const cjs = esbuild.build({
    entryPoints: files,
    bundle: false,
    plugins: [],
    outdir: 'dist/cjs',
    format: 'cjs',
  });

  const bundled = esbuild.build({
    entryPoints: ['./lib/index.ts'],
    bundle: true,
    plugins: [vanillaExtractPlugin({ outputCss: true })],
    outfile: 'dist/bundle/bundle.js',
    format: 'esm',
  });

  return Promise.all([esm, cjs, bundled]); 
}

main().catch(() => process.exit(1));