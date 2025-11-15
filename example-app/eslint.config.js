import { eslintConfig } from '@oliviac-tutorial-demo/configs';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  ...eslintConfig,
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    ignores: ['dist'],
  },
];
