import styled from 'styled-components';

import { ThemeProps } from '../Dazzle';
import { boxShadowIn, boxShadowOut } from './boxShadow';
import { element } from './element';

export const Button = styled.button`
	${element};
	${boxShadowOut('shallow')};
	
	background: ${(p: ThemeProps) => p.theme.color};
	border: none;
	padding: 1em 2em;
	outline: none;
	text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);

	:hover,:focus { 
		${boxShadowOut()};
	}

	:active {
		${boxShadowIn()};
	}

	:disabled {
		${boxShadowOut('shallow')};
		color: rgba(0, 0, 0, 0.3);
	}
`;