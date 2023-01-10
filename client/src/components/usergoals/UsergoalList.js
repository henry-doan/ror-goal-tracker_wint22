import { UsergoalConsumer } from "../../providers/UserGoalProvider";
import { useEffect } from "react";
import UsergoalShow from './UsergoalShow';
import { MainContainer, MainTable, MainTh } from "../styles/shared";

const UsergoalList = ({ getAllUsergoals, usergoals, deleteUsergoal, editUsergoal }) => {
  
  useEffect( () => {
    getAllUsergoals()
  }, [])

  return (
    <MainContainer>
      <h1>All UserGoals</h1>
      <MainTable>
        <tr>
          <MainTh>Entry</MainTh>
          <MainTh>When</MainTh>
          <MainTh>Goal</MainTh>
          <MainTh>Actions</MainTh>
        </tr>
        { usergoals.map( ug => 
          <UsergoalShow 
            key={ug.id} 
            {...ug} 
            deleteUsergoal={deleteUsergoal}
            editUsergoal={editUsergoal}
          />
        )}
      </MainTable>
    </ MainContainer>
  )
}

const ConnectedUsergoalList = (props) => (
  <UsergoalConsumer>
    { value => <UsergoalList {...props} {...value} />}
  </UsergoalConsumer>
)

export default ConnectedUsergoalList;