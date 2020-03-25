import React from 'react';

import { Button } from '.';

export default { component: Button, title: 'atoms/Button' };

export const Basic = () => <Button>Press Me</Button>

export const Disabled = () => <Button disabled>Don't Press Me</Button>