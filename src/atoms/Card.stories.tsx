import React from 'react';

import { Card } from './';

export default { component: Card, title: 'atoms/Card' };

export const Flat = () => <Card>Div Box</Card>;
export const Convex = () => <Card convex>Div Box</Card>;
export const Concave = () => <Card concave>Div Box</Card>;

export const Multiple = () => (
	<>
		<Card rows={2} shallow>1</Card>
		<Card cols={2} shallow>2</Card>
		<Card>3</Card>
		<Card shallow rows={2}>4</Card>
		<Card shallow cols={2}>5</Card>
		<Card cols={3}>6</Card>
	</>
);