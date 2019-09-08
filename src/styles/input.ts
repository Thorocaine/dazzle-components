import { css } from "styled-components";
import { colorFromTheme } from "theme/fromTheme";

const input = css`
    border: 1px solid ${colorFromTheme('#ced4da')};
    box-sizing: border-box;
    color: ${colorFromTheme('#495057')};
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: white;
    background-clip: padding-box;

    &:disabled {
        background-color: #e9ecef;
    }
`;

export default input;