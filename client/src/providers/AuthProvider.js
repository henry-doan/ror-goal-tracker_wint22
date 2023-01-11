import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleRegister = (user) => {
    axios.post('/api/auth', user)
      .then( res => {
        setUser(res.data.data)
        navigate('/dash')
      })
      .catch( err => {
        console.log(err)

      })
  }

  const handleLogin = (user) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        setUser(res.data.data)
        navigate('/dash')
      })
      .catch( err => {
        console.log(err)

      })
  }

  const handleLogout = () => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        setUser(null)
        navigate('/login')
      })
      .catch( err => {
        console.log(err)

      })
  }

  const updateUser = (updateUserObj) => {
    let data = new FormData()
    data.append('file', updateUserObj.image)
    data.append('fname', updateUserObj.fname)
    data.append('lname', updateUserObj.lname)
    data.append('email', updateUserObj.email)
    data.append('age', updateUserObj.age)

    axios.put(`/api/users/${user.id}`, data )
      .then( res => {
        setUser(res.data)
        navigate('/dash')
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider value={{
      user, 
      handleRegister,
      handleLogin,
      handleLogout,
      authenticated: user !== null,
      setUser: (user) => setUser(user),
      updateUser, 
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;