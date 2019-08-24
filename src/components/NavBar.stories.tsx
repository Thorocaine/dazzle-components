import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './NavBar';
import { text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('NavBar', module)
.add('default', () => <NavBar>{text('children', 'Nav Bar')}</NavBar>)
.add('withButton', () => <NavBar>Nav Bar<Button type="button">Login</Button></NavBar>);