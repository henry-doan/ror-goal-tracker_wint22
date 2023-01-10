import { MainButton } from "../styles/shared";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import axios from "axios";
import UsergoalForm from './UsergoalForm';

const UsergoalShow = ({ id, entry, when, goal_id, deleteUsergoal, editUsergoal }) => {
  const [gameName, setGoalName] = useState('')
  const [editing, setEdit] = useState(false)

  // goal_id function to grab the goal name
  useEffect( () => {
    axios.get(`/api/goals/${goal_id}`)
      .then(res => setGoalName(res.data.target))
      .catch(err => console.log(err))
  }, [])

  return(
    <li>
      { editing ?
        <>
          <button onClick={() => setEdit(false)}>
            x
          </button>
          <UsergoalForm 
            id={id}
            entry={entry}
            when={when}
            goalId={goal_id}
            setEdit={setEdit}
            editUsergoal={editUsergoal}
          />
        </>
        :
        <>
          <h4>{entry}</h4>
          <h4><Moment format="MM/DD/YYYY hh:mm a">{when}</Moment></h4>
          <h4>Goal: {gameName}</h4>
          <MainButton onClick={() => setEdit(true)}>
            Edit
          </MainButton>
          <MainButton onClick={() => deleteUsergoal(id)}>
            Delete
          </MainButton> 
        </>
      }
    </li>
  )
}

export default UsergoalShow;