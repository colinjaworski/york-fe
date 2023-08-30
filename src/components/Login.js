import React, {useState} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 function Login({loginStatus, setLoginStatus}) {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


const tryLogin = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:7071/api/react-backend/login', { name, password });
    setLoginStatus('loggedIn')
    setName(name)
    console.log(response);
} catch (error) {
    console.error('Error fetching data:', error); 
}
};

const tryRegister = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:7071/api/react-backend/register', { name, password });
    setName(name)
    console.log(response)
    tryLogin(event)
} catch (error) {
    console.error('Error fetching data:', error);
}
 };


 // Switch between forms
 const showRegister = () => {
  setLoginStatus("registerUser")
 };

 const showLogin = () => {
  setLoginStatus("notLoggedIn")
 };


  return (
    <Container maxWidth="sm">
    {loginStatus==='notLoggedIn' && <Box sx={{bgcolor: '#e3f4fa', margin: '22px', padding: '22px'}}>
    <h2>Login</h2>
    <form onSubmit={tryLogin}>
       <TextField sx={{ margin: '10px'}}
          required
          id="username"
          label="Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
         <TextField sx={{ margin: '10px'}}
          required
          id="password"
          type="password"
          label="Password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
      <Button type="submit">Submit</Button><br />
      <Button onClick={showRegister}>I Need To Register</Button>
      </form>
      </Box>}


      {loginStatus==='registerUser' && <Box sx={{ bgcolor: '#e3f4fa', margin: '22px', padding: '22px'}}>
        <h2>Register New User</h2>
      <form onSubmit={tryRegister}>
      <TextField sx={{ margin: '10px'}}
         required
         id="username"
         label="Name"
         defaultValue={name}
         onChange={(e) => setName(e.target.value)}
       /><br />
        <TextField sx={{ margin: '10px'}}
         required
         id="password"
         label="Password"
         defaultValue={password}
         onChange={(e) => setPassword(e.target.value)}
       /><br />
     <Button type="submit">Submit</Button><br />
     <Button onClick={showLogin}>I Already Have An Account</Button>
     </form>
     </Box>}


     {loginStatus==='loggedIn' && <Box sx={{ bgcolor: '#e3f4fa', margin: '22px', padding: '22px'}}>
      <h2>Hello, {name}! </h2>
      </Box>}
    </Container>
  );
}

export default Login;