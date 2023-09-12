import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:5000/auth/login', { username, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setAlertMessage('success');
          setUserName(''); 
          setPassword(''); 
          navigate('/home'); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='col-md-12 w-100 bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='text'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='username'
              className='form-control rounded-0'
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              autoComplete='off'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type='submit' className='btn btn-primary w-100 rounded-0'>
            Login
          </button>
        </form>
        {alertMessage && <p>{alertMessage}</p>}
        <p>Vous avez un compte</p>
        <Link
          to='/register'
          className='btn btn-secondary border w-100 rounded-0 text-decoration-none'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;