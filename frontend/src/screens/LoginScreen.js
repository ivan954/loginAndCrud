import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (userInfo) {
			navigate('/userslist')
		}
	}, [userInfo])

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(login(email, password))
	}

	return (
		<FormContainer>
			<h1>Sign In</h1>
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<br />
				<Button type='submit' variant='primary'>
					Sing In
				</Button>
			</Form>
		</FormContainer>
	)
}

export default LoginScreen
