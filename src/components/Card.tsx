import styled from 'styled-components';
import shadow from 'styles/shadow';
import flexRow from 'styles/flexRow';
import box from 'styles/box';

const Card = styled.article`
    ${box}
    ${flexRow}
    ${shadow}
    background-color: white;
    margin-bottom: 1rem;
    padding: 1.5rem;
`;

Card.defaultProps = { role: 'article' };

export default Card;
