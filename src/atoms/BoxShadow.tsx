import styled, { css } from 'styled-components';

import { ThemeProps } from '../Dazzle';
import { Element } from './Element';

type Props = { convex?: boolean } | {concave?: boolean};

const flat = css`
	background: ${({theme}: ThemeProps) => theme.color};
`;

const convex = css`
 background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
`;

const concave = css`
	background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
`;

export const BoxShadow = styled.div`
	${Element};
	box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
	${ (p: Props) => 'convex' in p && p.convex ? convex : 'concave' in p && p.concave? concave : flat };
	
`;

/*



*/