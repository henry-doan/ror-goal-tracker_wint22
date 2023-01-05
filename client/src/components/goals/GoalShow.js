import { useParams, useLocation } from "react-router-dom";
import Moment from 'react-moment';
import { MainButton } from '../styles/shared';

const GoalShow = () => {
  const { id } = useParams();
  const location = useLocation();
  const { target, start_time, end_time, img, complete, author } = location.state

  return (
    <>
      <h1>{target}</h1>
      <img src={img} width={'100%'} alt={target} />
      <p>Created by: {author}</p>
      <p>Completed: {complete ? 'Completed' : 'Not Completed'}</p>
      <p>Start:
        <Moment format={'MM-DD-YYYY HH:MM z'}>
          {start_time}
        </Moment>
      </p>
      <p>End: 
        <Moment format={'MM-DD-YYYY HH:MM z'}>
          {end_time}
        </Moment>
      </p>
      <MainButton>
        Edit
      </MainButton>
      <MainButton>
        Delete
      </MainButton>
    </>
  )
}


export default GoalShow;
