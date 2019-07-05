import styled from 'styled-components';
import Block from '../base/Block';
import { IThemedProps } from '../theme/Theme';

const NavBar = styled(Block).attrs(({ theme }: IThemedProps) => ({
  background: theme.primaryColor,
  flex: {
    justifyContent: 'space-between'
  }
}))`
  padding: 20px;
`;

export default NavBar;
