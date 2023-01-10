import { useParams, useLocation } from "react-router-dom";
import Moment from 'react-moment';
import { MainButton, MainContainer } from '../styles/shared';
import { GoalConsumer } from "../../providers/GoalProvider";
import GoalForm from './GoalForm';
import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import UsergoalForm from '../usergoals/UsergoalForm';

const GoalShow = ({ deleteGoal, user }) => {
  const [editing, setEdit] = useState(false);
  const [addEntry, setAddEntry] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const { target, start_time, end_time, img, complete, author } = location.state

  return (
    <>
      { editing ?
        <>
          <GoalForm 
            setEdit
            id={id}
            {...location.state}
          />
          <MainButton onClick={() => setEdit(false)}>
            Cancel
          </MainButton>
        </>
        :
        <>
          <img src={img} width={'100%'} alt={target} />
          <MainContainer>
            <h1>{target}</h1>
            <p>Created by: {author}</p>
            <p>Completed: {complete ? 'Completed' : 'Not Completed'}</p>
            <p>Start:
              <Moment format={'MM-DD-YYYY hh:mm a'}>
                {start_time}
              </Moment>
            </p>
            <p>End: 
              <Moment format={'MM-DD-YYYY hh:mm a'}>
                {end_time}
              </Moment>
            </p>
            <MainButton
              onClick={() => setEdit(true)}
            >
              Edit
            </MainButton>
            { addEntry ?
                <UsergoalForm 
                  setAddEntry={setAddEntry}
                  goalId={id}
                />
              : 
                <MainButton
                  onClick={() => setAddEntry(true)}
                >
                  Add Entry
                </MainButton>
            }
            {
              author === `${user.fname} ${user.lname}` 
              ?
              <>
                <MainButton
                  onClick={() => setEdit(true)}
                >
                  Edit
                </MainButton>
                <MainButton
                  onClick={() => deleteGoal(id)}
                >
                  Delete
                </MainButton>
              </>
              :
              null
            }
          </MainContainer>
        </>
      }
    </>
  )
}

const ConnectedGoalShow = (props) => (
  <GoalConsumer>
    { value => <GoalShow {...props} {...value} />}
  </GoalConsumer>
)

const ConnectedGoalShowAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedGoalShow {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedGoalShowAuth;