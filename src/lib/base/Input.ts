import styled from 'styled-components';

const Input = styled.input`
	padding: 6px 0 7px;
	border-style: none;
	border-bottom: 2px solid black;
	outline: none;
	&:focus {
		border-bottom-color: blue;
	}
`;

export default Input;