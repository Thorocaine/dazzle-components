import { css } from 'styled-components';

export const boxShadowIn = (shallow?: 'shallow') => css`
	box-shadow: inset ${shallow ? '1px 1px 2px' : '2px 2px 5px'} rgba(0, 0, 0, 0.25),
	            inset ${shallow ? '-1px -1px 2px' : '-5px -5px 10px'} rgba(255, 255, 255, 0.3);
`;

export const boxShadowOut = (shallow?: 'shallow') => css`
    box-shadow: ${shallow ? '4px 4px 6px' : '12px 12px 16px'} 0 rgba(0, 0, 0, 0.25),
                ${shallow ? '-3px -3px 4px' : '-8px -8px 12px'} 0 rgba(255, 255, 255, 0.3);
`;
