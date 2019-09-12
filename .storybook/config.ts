import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import withWrapper from '../src/stories/withWrapper';

const req = require.context('../src', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withWrapper);

addDecorator(withA11y);
addParameters({ viewport: {} });

addDecorator(
  withInfo({
    inline: true,
    source: false,
    propTables: false
  })
);

addDecorator(withKnobs);

configure(loadStories, module);
