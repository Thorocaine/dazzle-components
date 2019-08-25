import styled from 'styled-components';
import shadow from 'styles/shadow';
import flexRow from 'styles/flexRow';
import fromTheme from 'theme/fromTheme';

const NavBar = styled.nav`
  ${flexRow}
  ${shadow}
  background-color: ${fromTheme(t => t.colors.primary)};
  color: white;
  padding: 5px;
  margin: 0; 
`;

export default NavBar;