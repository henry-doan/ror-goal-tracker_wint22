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
    axios.put(`/api/goals/${id}`, { goal })
      .then( res => {
        const newUpdatedGoals = goals.map(g => {
          if (g.id === id) {
            return res.data
          }
          return g 
        })
        setGoals(newUpdatedGoals)
        navigate('/goals')
      })
    .catch( err => console.log(err))
  }

  const deleteGoal = (id) => {
    axios.delete(`/api/goals/${id}`)
      .then(res => {
        setGoals( goals.filter(g => g.id !== id ))
        navigate('/goals')
      })
      .catch( err => console.log(err))
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