import { GoalConsumer } from "../../providers/GoalProvider";
import { useEffect, useState } from "react";
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import { MainButton, MainContainer } from "../styles/shared";
import { Pagination } from 'react-bootstrap';

const Goals = ({ getAllGoals, goals, pagination }) => {
  const [adding, setAdd] = useState(false);
  const [pages, setPages] = useState([])

  useEffect( () => {
    getAllGoals()
    renderPages()
  }, [])

  const renderPages = () => {
    let items = [];
    for (let num = 1; num <= pagination; num++ ) {
      items.push(
        <Pagination.Item
          key={num}
          onClick={() => getAllGoals(num)}
        >
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }

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
      <Pagination>{pages}</Pagination>
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