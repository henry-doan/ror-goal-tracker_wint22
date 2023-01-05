import { CardCol, CardRow, MainCard, MainCardContainer } from "../styles/shared";
import { Link } from 'react-router-dom';

const GoalConsumer = ({ goals }) => (
  <CardRow>
    { goals.map( g =>
      <Link 
        to={`/goals/${g.id}`}
        state={{ ...g }}
      >
        <CardCol>
          <MainCard>
            <img src={g.img} width={'100%'} alt={g.target} />
            <MainCardContainer>
              <h1>{g.target}</h1>
              <p>Created By: {g.author}</p>
            </MainCardContainer>
          </MainCard>
        </CardCol>
      </Link>
    )}
  </CardRow>
)

export default GoalConsumer;