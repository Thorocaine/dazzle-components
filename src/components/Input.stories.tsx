import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import Input from './Input';
import StoryVariants from 'stories/storyVariants';

const value = text('children', 'Input Value');

const actions = {
  onChange: action('onChange'),
};

storiesOf('Input', module)
  .add('Default', () => <Input value={value} {...actions} />)
  .add('Variants', () => <StoryVariants InlineComponent={Input} valueProp='value' />)
  .add('Disabled', () => <StoryVariants InlineComponent={Input} valueProp='value' disabled />)