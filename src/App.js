import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth/Auth' // Путь к Auth.jsx
import Register from './pages/auth/Register' // Путь к Register.jsx
import Login from './pages/auth/Login' // Путь к Login.jsx

function App() {
	return (
		<BrowserRouter>
			<div className='font-sans'>
				<Routes>
					<Route path='/' element={<Navigate to='/auth' />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/auth/register' element={<Register />} />
					<Route path='/auth/login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
