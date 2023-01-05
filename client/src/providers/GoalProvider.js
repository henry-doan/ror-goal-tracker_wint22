import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GoalContext = React.createContext();
export const GoalConsumer = GoalContext.Consumer;

const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([])
  const navigate = useNavigate()

  const getAllGoals = () => {
    axios.get('/api/goals')
      .then(res => setGoals(res.data))
      .catch( err => console.log(err))
  }

  const addGoal = (goal) => {
    axios.post('/api/goals', { goal })
      .then(res => setGoals([...goals, res.data]))
      .catch( err => console.log(err))
  }

  const updateGoal = (id, goal) => {

  }

  const deleteGoal = (id) => {

  }

  return(
    <GoalContext.Provider value={{
      goals,
      getAllGoals,
      addGoal,
      updateGoal,
      deleteGoal,
    }}>
      { children }
    </GoalContext.Provider>
  )
}

export default GoalProvider;