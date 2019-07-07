import styled, { css } from 'styled-components';
import { IThemedProps } from '../theme/Theme';
import Color from './Color';

interface IFlexProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5;

const Flex = ({ justifyContent }: IFlexProps) => css`
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
}: IThemedProps) => `${(nulldefined(space) ? d : space) * spacingBase}px`;

export interface IBlockProps {
  background?: Color;
  flex?: IFlexProps;
  shadow?: true;
  padding?: SpaceIndex;
  margin?: SpaceIndex;
}

const Block = styled.div<IBlockProps & IThemedProps>`
  width: 100%;
  box-sizing: border-box;
  background: ${({ background }) => background};
  margin: ${({ margin, flex }) => size(margin, flex ? 0 : 1)};
  padding: ${({ padding, flex }) => size(padding, flex ? 1 : 2)};
  ${({ flex }) => flex && Flex(flex)};
  ${({ shadow }) => shadow && Shadow()};
`;

export default Block;
