import React from 'react';
import styled from 'styled-components';
import { StoryDecorator } from '@storybook/react';

const Wrapper = styled.div`
    margin: 2rem;
    background: lightgray
`;

const withWrapper: StoryDecorator = story => <Wrapper>{story()}</Wrapper>;

export default withWrapper;