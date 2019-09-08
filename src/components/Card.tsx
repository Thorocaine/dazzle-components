import styled, { css } from "styled-components";
import shadow from "styles/shadow";
import flexRow from "styles/flexRow";

type Props = { span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 }
const box = css`
    box-sizing: border-box;
    width: ${(p: Props) => 
        (!p.span) ? '100%'
        : `calc(${Math.round(p.span / 0.12)}% - 0.5rem)`};
`

const Card = styled.article`
    ${box}
    ${flexRow}
    ${shadow}
    background-color: white;
    margin-bottom: 1rem;
    padding: 1.5rem;
`;

Card.defaultProps = {role: 'article'};

export default Card;