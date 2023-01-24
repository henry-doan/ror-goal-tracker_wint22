import { Link } from 'react-router-dom';
import { MainButton, HomeHeader, HomeHeaderTxt } from '../styles/shared';
import { Slide } from 'react-awesome-reveal';

const Home = () => (
  <HomeHeader>
    <HomeHeaderTxt>
      <Link to='/login'>
        <MainButton className='main-font'>
          <Slide direction='up'>
            Login
          </Slide>
        </MainButton>
      </Link>
      <Link to='/register'>
        <MainButton className='main-font'>
          <Slide direction='up'>
            SignUp
          </Slide>
        </MainButton>
      </Link>
    </HomeHeaderTxt>
  </HomeHeader>
)

export default Home;