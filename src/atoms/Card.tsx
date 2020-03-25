import styled, { css } from 'styled-components';

import { ThemeProps } from '../Dazzle';
import { boxShadowOut } from './boxShadow';
import { element } from './element';

type Props = { shallow?: boolean } & ({ convex?: boolean } | {concave?: boolean});

const flat = css`
	background: ${({theme}: ThemeProps) => theme.color};
`;

const convex = css`
 background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
`;

const concave = css`
	background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
`;

export const Card = styled.div<Props>`
	${element};
	${ p => boxShadowOut(p.shallow ? 'shallow' : undefined)};
	height: 100%;
	${ p => 'convex' in p && p.convex ? convex : 'concave' in p && p.concave? concave : flat };
`;