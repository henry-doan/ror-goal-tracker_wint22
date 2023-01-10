import { useState } from "react";
import { UsergoalConsumer } from "../../providers/UserGoalProvider";
import { MainButton } from '../styles/shared';

const Usergoalform = ({ addUsergoal, goalId }) => {
  const [usergoal, setUsergoal] = useState({ entry: '', when: '', goal_id: goalId })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUsergoal(usergoal)
    setUsergoal({ entry: '', when: '', goal_id: goalId })
  }

  return (
    <>
      <h1>Creating a goal entry</h1>
      <form onSubmit={handleSubmit}>
        <label>What did you do to complete the goal?</label>
        <input 
          name="entry"
          value={usergoal.entry}
          onChange={(e) => setUsergoal({ ...usergoal, entry: e.target.value })}
          required
        />
        <label>When did you do this entry?</label>
        <input 
          name="when"
          value={usergoal.when}
          onChange={(e) => setUsergoal({ ...usergoal, when: e.target.value })}
          required
          type='datetime-local'
        />
        <MainButton type='submit'>
          Submit
        </MainButton>
      </form>
    </>
  )
}

const ConnectedUsergoalForm = (props) => (
  <UsergoalConsumer>
    { value => <Usergoalform {...props} {...value} />}
  </UsergoalConsumer>
)

export default ConnectedUsergoalForm;