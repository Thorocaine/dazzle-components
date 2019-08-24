import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {  text } from '@storybook/addon-knobs/react';

import Button from './Button';


export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
.add('default', () => <Button type="button" {...actions}>{text('children', 'Button Text')}</Button>);