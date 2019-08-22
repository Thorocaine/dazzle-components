import React from 'react';
import styled from 'styled-components';
import Input from '../base/Input';

const FieldSet = styled.fieldset``;
const Label = styled.label``;

function Field({children}: {children: Element}) 
{
	return (<FieldSet>
		<Label />
		{children}
		</FieldSet>);
}

export default Field;