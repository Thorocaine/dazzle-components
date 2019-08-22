import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider, ThemeProps } from 'styled-components';
import ThemeConfig from './config';

interface IProps {
  children: ReactNode[];
  theme: ThemeConfig;
}


const GlobalStyle = createGlobalStyle<ThemeProps<ThemeConfig>>`
  body, html {
	  background: ${({ theme }) => theme.background};
    margin: 0;
	  padding: 0;
	  width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

function Theme({ children, theme }: IProps) 
{
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        {children}</>
    </ThemeProvider>
  );
}

export default Theme;
