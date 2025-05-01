import { FC, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material'
import { getTheme } from './theme'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { Brightness4, Brightness7 } from '@mui/icons-material'

const App: FC = () => {
  const getInitialMode = (): 'light' | 'dark' => {
    const savedMode = localStorage.getItem('themeMode')
    return savedMode === 'light' || savedMode === 'dark' ? savedMode : 'dark'
  }

  const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode)
  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }

  useEffect(() => {
    // Если вдруг внешне изменилось значение в localStorage
    const listener = () => {
      const newMode = localStorage.getItem('themeMode')
      if (newMode === 'light' || newMode === 'dark') {
        setMode(newMode)
      }
    }
    window.addEventListener('storage', listener)
    return () => window.removeEventListener('storage', listener)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
