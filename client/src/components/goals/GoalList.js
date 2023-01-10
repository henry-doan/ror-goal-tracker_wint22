import { CardCol, CardImg, CardRow, MainCard, MainCardContainer } from "../styles/shared";
import { Link } from 'react-router-dom';

const GoalConsumer = ({ goals }) => (
  <CardRow>
    { goals.map( g =>
        <CardCol key={g.id}>
          <Link 
            to={`/goals/${g.id}`}
            state={{ ...g }}
          >
          <MainCard>
            <CardImg src={g.img} width={'100%'} alt={g.target} />
            <MainCardContainer>
              <h1>{g.target}</h1>
              <p>Created By: {g.author}</p>
            </MainCardContainer>
          </MainCard>
        </Link>
      </CardCol>
    )}
  </CardRow>
)

export default GoalConsumer;