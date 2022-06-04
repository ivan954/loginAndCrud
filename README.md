### Env Variables

Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
```
create .env file in frontend and add:
```
REACT_APP_PORT = 5000
```
### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Sample User Logins
```
admin account:
email : admin@example.com 
password: 123456

user acount: 
email: 'john@example.com'
password: 123456
```

users are in backend/data/users.js
