import { defineConfig } from 'tsup';

export default defineConfig((cliOptions) => ({
  entry: ['index.ts'],
  format: 'esm',
  clean: true,
  experimentalDts: true,
  ...cliOptions,
}));
