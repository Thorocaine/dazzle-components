import styled from 'styled-components';
import Block, { IBlockProps } from '../base/Block';
import { IThemedProps } from '../theme/Theme';

const NavBarBlockProps = ({ theme }: IThemedProps): IBlockProps => ({
  background: theme.primaryColor,
  flex: {
    justifyContent: 'space-between'
  },
  padding: 4,
  margin: 0,
  shadow: true
});

const NavBar = styled(Block).attrs(NavBarBlockProps)``;

export default NavBar;
