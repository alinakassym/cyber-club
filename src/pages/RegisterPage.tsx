import { FC, useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material'

const RegisterPage: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Пароли не совпадают')
      return
    }
    console.log('Register:', { email, password })
    // сюда пойдёт API-запрос
  }

  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" align="center">Регистрация</Typography>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
        <TextField label="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
        <TextField label="Повторите пароль" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} fullWidth />
        <Button variant="contained" onClick={handleRegister}>Зарегистрироваться</Button>
      </Box>
    </Container>
  )
}

export default RegisterPage
