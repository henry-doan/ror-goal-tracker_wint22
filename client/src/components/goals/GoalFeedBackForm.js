import { useState } from "react";
import { MainButton } from "../styles/shared";
import { AuthConsumer } from '../../providers/AuthProvider';
import axios from 'axios'

const GoalFeedbackForm = ({ user }) => {
  const [feedback, setFeedback] = useState({ fullName: `${user.fname} ${user.lname}`, email: user.email, hittingGoal: 'Yes', challenge: '', learned: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // push it to the google sheet
    // axios.post(process.env.REACT_APP_SHEET_URL, feedback)
    // .then( res => {
    //   // do something
    //   console.log(res)
    // })
    // .catch( err => {
    //   console.log(err)
    // })
    axios({
      method: 'post',
      url: process.env.REACT_APP_SHEET_URL,
      withCredentials: false,
      params: {
        access_token: "-v1sQ@%X@$sQ571yAZImV5k!R9JItfrHBk1_6Y2nBu01#ETB8J_VqgYYJ1759mV#",
      },
    }).then( res => {
      // do something
      console.log(res)
    })
    .catch( err => {
      console.log(err)
    })
    setFeedback({ fullName: `${user.fname} ${user.lname}`, email: user.email, hittingGoal: 'Yes', challenge: '', learned: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Are you hitting the goals you are setting?</label>
        <select
          name='hittingGoal'
          value={feedback.hittingGoal}
          onChange={(e) => setFeedback({ ...feedback, hittingGoal: e.target.value }) }
          required
        >
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
        <label>What are your biggest challenges?</label>
        <textarea
          name='challenge'
          value={feedback.challenge}
          onChange={(e) => setFeedback({ ...feedback, challenge: e.target.value }) }
          required
        ></textarea>
        <label>What have you learned with the goals you completed?</label>
        <textarea
          name='learned'
          value={feedback.learned}
          onChange={(e) => setFeedback({ ...feedback, learned: e.target.value }) }
          required
        ></textarea>
        <MainButton type='submit'>Submit</MainButton>
      </form>
    </>
  )
}

const ConnectedGoalFeedbackForm = (props) => (
  <AuthConsumer>
    { value => <GoalFeedbackForm {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedGoalFeedbackForm;