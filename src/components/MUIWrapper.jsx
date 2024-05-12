import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

export const MUIWrapperContext = createContext({
    toggleColorMode: () => {},
})

export default function MUIWrapper({ children }) {
    const [mode, setMode] = useState('light')
    const muiWrapperUtils = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontFamily: 'Inter, Sans-serif',
                    bold: {
                        fontWeight: 700,
                    },
                    fontSize1: {
                        fontSize: '14px',
                    },
                    fontSize2: {
                        fontSize: '15px',
                    },
                },
            }),
        [mode]
    )

    return (
        <MUIWrapperContext.Provider value={muiWrapperUtils}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MUIWrapperContext.Provider>
    )
}
