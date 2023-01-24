import { CardCol, CardImg, CardRow, MainCard, MainCardContainer } from "../styles/shared";
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const GoalConsumer = ({ goals }) => (
  <CardRow>
    { goals.map( g =>
      <CardCol key={g.id}>
        <Link 
          to={`/goals/${g.id}`}
          state={{ ...g }}
        >
          <Fade>
            <MainCard>
              <CardImg src={g.img} width={'100%'} alt={g.target} />
              <MainCardContainer>
                <h1>{g.target}</h1>
                <p>Created By: {g.author}</p>
              </MainCardContainer>
            </MainCard>
          </Fade>
        </Link>
      </CardCol>
    )}
  </CardRow>
)

export default GoalConsumer;