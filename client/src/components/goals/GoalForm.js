import { useState, useEffect } from 'react';
import { GoalConsumer } from '../../providers/GoalProvider';
import { MainButton } from '../styles/shared';
import { AuthConsumer } from '../../providers/AuthProvider';

const GoalForm = ({ setAdd, addGoal, user, id, target, author, start_time, end_time, img, complete, setEdit, updateGoal }) => {
  const [goal, setGoal] = useState({ target: '', author: `${user.fname} ${user.lname}`, start_time: '', end_time: '', complete: false, img: 'https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' })
  
  useEffect( () => {
    if (id) {
      setGoal({ target, author, start_time, end_time, img, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateGoal(id, goal)
      setEdit(false)
    } else {
      addGoal(goal)
      setAdd(false)
    }
    setGoal({ target: '', author: `${user.fname} ${user.lname}`, start_time: '', end_time: '', complete: false, img: 'https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Add"} Goal</h1>
      <form onSubmit={handleSubmit}>
        <label>Name of Goal</label>
        <input 
          name='target'
          value={goal.target}
          onChange={(e) => setGoal({...goal, target: e.target.value })}
          required
        />
        <label>Start Time</label>
        <input 
          type='datetime-local'
          name='start_time'
          value={goal.start_time}
          onChange={(e) => setGoal({...goal, start_time: e.target.value })}
        />
        <label>End Time</label>
        <input 
          type='datetime-local'
          name='end_time'
          value={goal.end_time}
          onChange={(e) => setGoal({...goal, end_time: e.target.value })}
        />
        <label>Image</label>
        <input 
          name='img'
          value={goal.img}
          onChange={(e) => setGoal({...goal, img: e.target.value })}
        />
        {
          id ?
          <>
            <label>Completed?</label>
            <input 
              type="checkbox"
              name='complete'
              value={goal.complete}
              onChange={(e) => setGoal({...goal, complete: e.value.checked })}
            />
          </>
          : 
          null
        }
        <MainButton type='submit'>
          Submit
        </MainButton>
      </form>
    </>
  )
}

const ConnectedGoalForm = (props) => (
  <GoalConsumer>
    { value => <GoalForm {...props} {...value} />}
  </GoalConsumer>
)

const ConnectedGoalFormAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedGoalForm {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedGoalFormAuth;