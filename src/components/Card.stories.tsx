import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import styled from 'styled-components';
import flexRow from 'styles/flexRow';

const Content = styled.div`
    ${flexRow}
    flex-wrap: 'wrap';
`;

storiesOf('Card', module)
    .add('Default', () => <Card>Details</Card>)
    .add('Multiple', () => <Content>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card span={6}>Card half</Card>
        <Card span={6}>Card half</Card>
        <Card span={4}>Card Third</Card>
        <Card span={4}>Card Third</Card>
        <Card span={4}>Card Third</Card>
    </Content>)
