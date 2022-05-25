import bcrypt from 'bcryptjs'

const users = [
	{
		_id: '1',
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		_id: '2',
		name: 'John Dow',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		_id: '3',
		name: 'Max wilson',
		email: 'Max@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		_id: '4',
		name: 'Leonid rushin',
		email: 'Leonid@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
]

export default users
