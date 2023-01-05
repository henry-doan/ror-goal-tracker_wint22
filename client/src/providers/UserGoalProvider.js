import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UsergoalContext = React.createContext();
export const UsergoalConsumer = UsergoalContext.Consumer;

const UsergoalProvider = ({ children }) => {
  const [usergoals, setUsergoals] = useState([])

  const getAllUsergoals = () => {

  }

  const addUsergoal = (usergoal) => {

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