import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';
import { action } from '@storybook/addon-actions';
import StoryVariants from 'stories/storyVariants';

const actions = {
  onChange: action('onChange')
};

storiesOf('Toggle', module)
  .add('Default', () => <Toggle {...actions} />)
  .add('Variants', () => (
    <StoryVariants InlineComponent={Toggle} {...actions} valueProp="label" />
  ))
  .add('Disabled', () => (
    <>
      <StoryVariants
        InlineComponent={Toggle}
        {...actions}
        disabled
        valueProp="label"
      />
      <StoryVariants
        InlineComponent={Toggle}
        {...actions}
        disabled
        checked
        valueProp="label"
      />
    </>
  ));
