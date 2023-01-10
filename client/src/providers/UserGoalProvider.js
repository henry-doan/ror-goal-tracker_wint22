import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UsergoalContext = React.createContext();
export const UsergoalConsumer = UsergoalContext.Consumer;

const UsergoalProvider = ({ children }) => {
  const [usergoals, setUsergoals] = useState([])
  const navigate = useNavigate();

  const getAllUsergoals = () => {
    axios.get('/api/usergoals')
      .then(res => {
        setUsergoals(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addUsergoal = (usergoal) => {
    axios.post('/api/usergoals', { usergoal })
      .then(res => {
        setUsergoals([...usergoals, res.data])
        navigate('/dash')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateUsergoal = (id, usergoal) => {

  }

  const deleteUsergoal = (id) => {

  }

  return(
    <UsergoalContext.Provider value={{
      usergoals,
      getAllUsergoals,
      addUsergoal,
      updateUsergoal,
      deleteUsergoal,
    }}>
      { children }
    </UsergoalContext.Provider>
  )
}

export default UsergoalProvider;