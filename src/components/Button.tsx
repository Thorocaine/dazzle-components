import styled from 'styled-components';
import shadow from 'styles/shadow';
import { colorFromTheme } from 'theme/fromTheme';

type Props = BaseProps & {
    type: 'submit' | 'reset' | 'button';
};

const Button = styled.button<Props>`
    ${shadow}
    background: ${colorFromTheme()};
    color: ${p => p.variant && 'white'};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: .375rem .75rem; /*6px 12px;*/
    border: 1px solid transparent;

    &:disabled {
        background: ${colorFromTheme(true)};
        color: default;
    }
`;

export default Button;