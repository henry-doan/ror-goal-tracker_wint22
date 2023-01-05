import { GoalConsumer } from "../../providers/GoalProvider";
import { useEffect, useState } from "react";
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import { MainButton, MainContainer } from "../styles/shared";

const Goals = ({ getAllGoals, goals }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllGoals()
  }, [])

  return (
    <MainContainer>
      {
        adding ?
        <>
          <GoalForm setAdd={setAdd} />
          <MainButton onClick={() => setAdd(false)}>
            Cancel
          </MainButton>
        </>
        :
        <MainButton onClick={() => setAdd(true)}>
          +
        </MainButton>
      }
      <h1>All Goals</h1>
      <GoalList goals={goals} />
    </MainContainer>
  )
}

const ConnectedGoals = (props) => (
  <GoalConsumer>
    { value => <Goals {...props} {...value} />}
  </GoalConsumer>
)

export default ConnectedGoals;