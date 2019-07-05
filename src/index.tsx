import React from 'react';
import ReactDOM from 'react-dom';
import Block from './lib/base/Block';
import Theme from './lib/theme/Theme';
import NavBar from './lib/components/NavBar';
import Color from './lib/base/Color';
import styled from 'styled-components';

const t = `gg ${Color.red()}`;

const MyBlock = styled(Block)`
  width: 100%;
  height: 50px;
`;

const base = new Color(174, 97, 43);
const Base = styled(MyBlock)`
  background: ${base};
`;
const Comp = styled(MyBlock)`
  background: ${base.complementary()};
`;

const [Tri1, Tri2] = base.triadic().map(
  x =>
    styled(MyBlock)`
      background: ${x};
    `
);

const [Split1, Split2] = base.split().map(
  x =>
    styled(MyBlock)`
      background: ${x};
    `
);

const [Narrow1, Narrow2] = base.narrow().map(
  x =>
    styled(MyBlock)`
      background: ${x};
    `
);

const [Tet1, Tet2, Tet3] = base.tetradic().map(
  x =>
    styled(MyBlock)`
      background: ${x};
    `
);

ReactDOM.render(
  <Theme theme={{ background: 'lightblue' }}>
    <NavBar>
      123<i>456</i>789
    </NavBar>
    <h2>Complementary</h2>
    <Block flex={{ justifyContent: 'space-between' }}>
      <Base />
      <Comp />
    </Block>

    <h2>Triadic</h2>
    <Block flex={{ justifyContent: 'space-between' }}>
      <Base />
      <Tri1 />
      <Tri2 />
    </Block>

    <h2>Split</h2>
    <Block flex={{ justifyContent: 'space-between' }}>
      <Base />
      <Split1 />
      <Split2 />
    </Block>

    <h2>Narrow</h2>
    <Block flex={{ justifyContent: 'space-between' }}>
      <Base />
      <Narrow1 />
      <Narrow2 />
    </Block>

    <h2>Tetradic</h2>
    <Block flex={{ justifyContent: 'space-between' }}>
      <Base />
      <Tet1 />
      <Tet2 />
      <Tet3 />
    </Block>

    <Block>456</Block>
  </Theme>,
  document.getElementById('root')
);
