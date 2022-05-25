import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table, Row, Col } from 'react-bootstrap'
import { listUsers, deleteUser } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'

const UsersList = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userList = useSelector((state) => state.userList)
	const { loading, error, users } = userList
	const userDelete = useSelector((state) => state.userDelete)
	const { success: successDelete } = userDelete
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		dispatch(listUsers())
	}, [dispatch, successDelete, userInfo])

	const deleteHandler = (id) => {
		if (window.confirm('are you sure')) {
			dispatch(deleteUser(id))
		}
	}
	const createHandler = () => {
		navigate(`/createuser`)
	}
	const editHandler = (id) => {
		navigate(`/edituser/${id}`)
	}
	return (
		<>
			<Row>
				<Col sm={4}>
					<h1>Users</h1>
				</Col>
				<Col sm={8}>
					<input
						onChange={(e) => {
							setSearchTerm(e.target.value)
						}}
						type='text'
						placeholder='Search...'
						className='w-50 text-center'
					/>
				</Col>
			</Row>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table striped bordered hover responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADMIN</th>
							{userInfo.isAdmin && (
								<th>
									<Button onClick={createHandler}>Create user</Button>
								</th>
							)}
						</tr>
					</thead>
					<tbody>
						{users
							.filter((val) => {
								if (searchTerm === '') {
									return val
								} else if (
									val.name.toLowerCase().includes(searchTerm.toLowerCase())
								) {
									return val
								}
							})
							.map((user) => (
								<tr key={user._id}>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>
										<a href={`mailto:${user.email}`}>{user.email}</a>
									</td>
									<td>
										{user.isAdmin ? (
											<i
												className='fas fa-check'
												style={{ color: 'green' }}
											></i>
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									{userInfo.isAdmin && (
										<td>
											<Button
												variant='light'
												className='btn-sm'
												onClick={() => editHandler(user._id)}
											>
												<i className='fas fa-edit'></i>
											</Button>

											<Button
												variant='danger'
												className='btn-sm'
												onClick={() => deleteHandler(user._id)}
											>
												<i className='fas fa-trash'></i>
											</Button>
										</td>
									)}
								</tr>
							))}
					</tbody>
				</Table>
			)}
		</>
	)
}

export default UsersList
