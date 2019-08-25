import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { NavBar } from 'index';
import Theme from './Theme';
import ThemeConfig from './ThemeConfig';
import Color from 'lib/base/Color';

const theme = object('config', ThemeConfig(Color.red()));

const Demo = (): JSX.Element => 
<>
    <NavBar>Nav Bar</NavBar>
    <p>This is my block</p>
</>;

storiesOf('Theme', module)
    .add('Default', () => <Demo /> )
    .add('With Primary Color', () => <Theme theme={theme}><Demo /></Theme> );