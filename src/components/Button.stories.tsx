import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import Button from './Button';
import StoryVariants from 'stories/storyVariants';

const children = text('children', 'Button Text');

const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
  .add('Default', () => <Button type="button" {...actions}>{children}</Button>)
  .add('Variants', () => <StoryVariants InlineComponent={Button} valueProp="children" />)
  .add('Disabled', () => <StoryVariants InlineComponent={Button} valueProp="children" disabled />)