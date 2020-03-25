import React from 'react';

import { Input } from '.';

export default { component: Input, title: 'atoms/Input' };

export const Basic = () => <Input />

export const Disabled = () => <Input disabled value="val" />

export const Options = () => (<>
	<Input list="browsers" />
	<datalist id="browsers" style={{background: 'red'}}>
		<option value="Internet Explorer" style={{font:'size: 1.5em'}} />
		<option value="Firefox" />
		<option value="Google Chrome" />
		<option value="Opera" />
		<option value="Safari" />
	</datalist>
</>);