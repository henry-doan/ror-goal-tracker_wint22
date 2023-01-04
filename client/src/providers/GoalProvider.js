import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GoalContext = React.createContext();
export const GoalConsumer = GoalContext.Consumer;

const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([])
  const navigate = useNavigate()

  const getAllGoals = () => {
    
  }

  const addGoal = (goal) => {

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