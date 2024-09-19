import { defineConfig } from 'tsup'
import { bundleless } from 'tsup-plugin-bundleless'

export const tsup = defineConfig((option) => ({
  entry: ['src/**/*.ts'],
  target: 'es2022',
  dts: true,
  clean: !option.watch,
  format: ['esm', 'cjs'],
  platform: 'node',
  splitting: true,
  treeshake: true,
  minify: false,
  sourcemap: !!option.watch,
  tsconfig: option.watch ? 'tsconfig.dev.json' : 'tsconfig.json',
  noExternal: ['lodash-es'],
  ...bundleless(),
}))
