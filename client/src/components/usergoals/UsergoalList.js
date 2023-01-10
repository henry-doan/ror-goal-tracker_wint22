import { UsergoalConsumer } from "../../providers/UserGoalProvider";
import { useEffect } from "react";
import UsergoalShow from './UsergoalShow';

const UsergoalList = ({ getAllUsergoals, usergoals, deleteUsergoal, editUsergoal }) => {
  
  useEffect( () => {
    getAllUsergoals()
  }, [])

  return (
    <>
      <h1>All UserGoals</h1>
      <ul>
        { usergoals.map( ug => 
          <UsergoalShow 
            key={ug.id} 
            {...ug} 
            deleteUsergoal={deleteUsergoal}
            editUsergoal={editUsergoal}
          />
        )}
      </ul>
    </>
  )
}

const ConnectedUsergoalList = (props) => (
  <UsergoalConsumer>
    { value => <UsergoalList {...props} {...value} />}
  </UsergoalConsumer>
)

export default ConnectedUsergoalList;