import styled from 'styled-components';
import shadow from 'styles/shadow';

type Props = {
    type: 'submit' | 'reset' | 'button';
};

// background-color: ${p => (p.primary ? p.theme.primary : '#9e9e9e')};
// color: ${p => (p.primary ? 'white' : 'black')};

const Button = styled.button<Props>`
    ${shadow}
    padding: 5px 10px;
    border-width: 0px;
`;

export default Button;