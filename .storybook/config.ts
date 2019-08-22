import { configure } from '@storybook/react';
// import requireContext from 'require-context.macro';

const req = require.context('../src', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
