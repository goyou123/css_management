import React from 'react'
import MainRouter, { ROUTES } from 'routes/MainRouter'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'

import { useDarkMode } from 'hooks/useDarkMode'
import { MainLayoutDiv, InnerLayoutDiv } from './DefaultLayout.style'
import Sidebar from './Sidebar/Sidebar'

function DefaultLayout() {
    const [themeMode, toggleTheme] = useDarkMode()
    const theme = themeMode === 'light' ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainLayoutDiv>
                <InnerLayoutDiv>
                    <Sidebar routes={ROUTES} themeMode={themeMode} toggleTheme={toggleTheme} />
                    <MainRouter theme={theme} />
                </InnerLayoutDiv>
            </MainLayoutDiv>
        </ThemeProvider>
    )
}

export default DefaultLayout
