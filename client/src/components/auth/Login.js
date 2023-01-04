import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { MainButton } from '../styles/shared';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }
  
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required         
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <MainButton type='submit'>Submit</MainButton>
      </form>
    </>
  )  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;