import styled, { css } from 'styled-components';
import { BackgroundColorProperty } from 'csstype';

interface IFlexProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const Flex = ({ justifyContent }: IFlexProps) => css`
  display: flex;
  justify-content: ${justifyContent};
`;

interface IBlockProps {
  background?: BackgroundColorProperty;
  flex?: IFlexProps;
}

const Block = styled.div`
  background: ${({ background }: IBlockProps) => background};
  ${({ flex }: IBlockProps) => flex && Flex(flex)};
`;

export default Block;
