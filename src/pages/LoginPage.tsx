import { FC, useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material'

const LoginPage: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login:', { email, password })
    // здесь будет API-запрос
  }

  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" align="center">Вход</Typography>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
        <TextField label="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <Button variant="contained" onClick={handleLogin}>Войти</Button>
      </Box>
    </Container>
  )
}

export default LoginPage
