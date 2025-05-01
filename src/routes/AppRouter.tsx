import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRouter
