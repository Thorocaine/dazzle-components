import React, { FC } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

type Theme = typeof defaultTheme;
type Props = { theme: Partial<Theme> };
export type ThemeProps<T = {}> = { theme: Theme } & T;
const defaultTheme = { color: '#afd275' };

const GlobalStyle = createGlobalStyle<ThemeProps>`
	body {
	  background: ${(p: ThemeProps) => p.theme.color};
	}	
`;

const Root = styled.div`
	align-items: center;
		background: ${(p: ThemeProps) => p.theme.color};
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 200px;
		grid-auto-rows: 200px;
		-height: 100vh;
		justify-content: center;
		padding: 1rem;
		
		@media (min-width: 700px) {
					grid-template-columns: repeat(3, 200px);
		
	}

`

const Dazzle: FC<Props> = ({children, theme}) => (
	<ThemeProvider theme={{...defaultTheme, ...theme}}>
		<GlobalStyle />
		<Root>
		{children}
		</Root>
	</ThemeProvider>
);

export default Dazzle;
