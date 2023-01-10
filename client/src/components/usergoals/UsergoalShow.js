import { MainButton } from "../styles/shared";

const UsergoalShow = ({ id, entry, when, goal_id }) => {
  // goal_id function to grab the goal name

  return(
    <li>
      <h5>{entry}</h5>
      <h5>{when}</h5>
      <h5>Goal: {goal_id}</h5>
      <MainButton>Edit</MainButton>
      <MainButton>Delete</MainButton>
    </li>
  )
}

export default UsergoalShow;