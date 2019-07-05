import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ITheme, { defaultTheme } from './ITheme';

interface IProps {
  children: ReactNode[];
  theme: Partial<ITheme>;
}

export interface IThemedProps {
  theme: ITheme;
}

const GlobalStyle = createGlobalStyle<IThemedProps>`
  body, html {
	  background: ${({ theme }) => theme.background};
    margin: 0;
	  padding: 0;
	  width: 100%;
	  height: 100%;
  }
`;

function Theme({ children, theme }: IProps) {
  const fullTheme = { ...defaultTheme, ...theme };
  return (
    <ThemeProvider theme={fullTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}

export default Theme;
