import { addDecorator } from '@storybook/react';
import React from 'react';

import Dazzle from '../src/Dazzle';

addDecorator(storyFn => <Dazzle theme={{color: 'gainsboro'}}>{storyFn()}</Dazzle>);