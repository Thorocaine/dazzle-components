import styled from 'styled-components';
import shadow from 'styles/shadow';
import flexRow from 'styles/flexRow';

const NavBar = styled.nav`
  ${flexRow}
  ${shadow}
  background-color: #00f;
  color: white;
  padding: 5px;
  margin: 0;
`;

export default NavBar;