import React from 'react';

import { BoxShadow } from './BoxShadow';

export default { title: 'box-shadow' };

export const Flat = () => <BoxShadow>Div Box</BoxShadow>;
export const Convex = () => <BoxShadow convex>Div Box</BoxShadow>;
export const Concave = () => <BoxShadow concave>Div Box</BoxShadow>;

export const Multiple = () => (
	<>
		<BoxShadow rows={2}>1</BoxShadow>
		<BoxShadow cols={2}>2</BoxShadow>
		<BoxShadow>3</BoxShadow>
		<BoxShadow rows={2}>4</BoxShadow>
		<BoxShadow cols={2}>5</BoxShadow>
		<BoxShadow cols={3}>6</BoxShadow>
	</>
);