import { Config } from '@stencil/core';

import { postcss } from '@stencil/postcss';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';

export const config: Config = {
  namespace: 'c3-components',
  globalStyle: 'src/assets/css/index.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        postcssNested(),
        postcssPresetEnv({
          stage: 1,
        })
      ]
    })
  ]
};
