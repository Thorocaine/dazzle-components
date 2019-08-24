import { css, FlattenSimpleInterpolation } from 'styled-components';

const flex = (direction: 'row' | 'column'): FlattenSimpleInterpolation => css`
align-items: baseline;
display: flex;
flex-flow: ${direction} wrap;
justify-content: space-between;
`;

export default flex;