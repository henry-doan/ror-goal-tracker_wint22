import UsergoalList from '../usergoals/UsergoalList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [numOfGoals, setNumOfGoals] = useState(0)

  useEffect( () => {
    axios.get('/api/numofgoals')
      .then(res => setNumOfGoals(res.data))
      .catch( err => console.log(err))
  }, [])
  
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Current Number of Goals: {numOfGoals}</h3>
      <UsergoalList />
    </>
  )
}

export default Dashboard;