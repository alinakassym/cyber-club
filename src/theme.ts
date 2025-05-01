import { createTheme } from '@mui/material/styles'

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode,
      primary: {
        main: '#1976d2'
      }
    }
  })
