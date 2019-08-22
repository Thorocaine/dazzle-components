import styled from 'styled-components';
import Block, { BlockProps } from '../lib/base/Block';
import ThemeConfig from '../lib/theme/config';

const NavBarBlockProps = ({ theme }: {theme: ThemeConfig}): BlockProps => ({
  background: theme.primary,
  flex: {
    justifyContent: 'space-between'
  },
  padding: 4,
  margin: 0,
  shadow: true
});

const NavBar = styled(Block).attrs(NavBarBlockProps)``;

export default NavBar;
