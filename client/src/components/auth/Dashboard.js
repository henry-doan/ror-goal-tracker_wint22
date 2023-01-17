import UsergoalList from '../usergoals/UsergoalList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MainButton } from '../styles/shared';

const Dashboard = () => {
  const [numOfGoals, setNumOfGoals] = useState(0)
  const [goalBuddy, setGoalBuddy] = useState('')

  useEffect( () => {
    axios.get('/api/numofgoals')
      .then(res => setNumOfGoals(res.data))
      .catch( err => console.log(err))
    grabGoalBuddy()
  }, [])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const grabGoalBuddy = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(res => {
        const randIndex = Math.floor(Math.random() * res.data.results.length)
        setGoalBuddy(res.data.results[randIndex].name)
      })
      .catch( err => console.log(err))
  }  
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Current Number of Goals: {numOfGoals}</h3>
      <h3>Your Goal Buddy for the Day: {capitalizeFirstLetter(goalBuddy)}</h3>
      <MainButton onClick={grabGoalBuddy}>New Buddy</MainButton>
      <UsergoalList />
    </>
  )
}

export default Dashboard;