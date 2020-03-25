import styled from 'styled-components';

import { ThemeProps } from '../Dazzle';
import { boxShadowIn } from './boxShadow';
import { element } from './element';



export const Input = styled.input`
	${element};
	${boxShadowIn()};
	background: ${(p: ThemeProps) => p.theme.color};
	border: none;
	padding: 1em 2em;
	outline: none;
	text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);
	
	:focus { 
		${boxShadowIn('shallow')};
	}
	
	:disabled {
		color: rgba(0, 0, 0, 0.3);
	}
`;