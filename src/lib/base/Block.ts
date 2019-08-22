import styled, { css } from 'styled-components';
import Color from './Color';
import ThemeConfig from '../theme/config';

interface FlexProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5;

const Flex = ({ justifyContent }: FlexProps) => css`
  display: flex;
  justify-content: ${justifyContent};
`;

const Shadow = () => css`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const nulldefined = (x: any): x is null | undefined =>
  x === null || x === undefined;

const size = (space: SpaceIndex | undefined, d: SpaceIndex) => ({
  theme: { spacingBase }
}: {theme: ThemeConfig}) => `${(nulldefined(space) ? d : space) * spacingBase}px`;

export interface BlockProps {
  background?: Color;
  flex?: FlexProps;
  shadow?: true;
  padding?: SpaceIndex;
  margin?: SpaceIndex;
}

const Block = styled.div<BlockProps>`
  width: 100%;
  box-sizing: border-box;
  background: ${({ background }) => background};
  margin: ${({ margin, flex }) => size(margin, flex ? 0 : 1)};
  padding: ${({ padding, flex }) => size(padding, flex ? 1 : 2)};
  ${({ flex }) => flex && Flex(flex)};
  ${({ shadow }) => shadow && Shadow()};
`;

export default Block;
