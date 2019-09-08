import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from './Select';
import { array } from '@storybook/addon-knobs/react';

const options = array('options', ['Option 1', 'Option 2', 'Option 3'])
  .map(o => <option key={o}>{o}</option>);

const actions = {
  onChange: action('onChange'),
};

storiesOf('Select', module)
.add('Default', () => <Select {...actions}>{options}</Select>)
.add('Disabled', () => <Select disabled>{options}</Select>)