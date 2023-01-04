import { Link } from 'react-router-dom';
import { MainButton, HomeHeader, HomeHeaderTxt } from '../styles/shared';

const Home = () => (
  <HomeHeader>
    <HomeHeaderTxt>
      <Link to='/login'>
        <MainButton className='main-font'>Login</MainButton>
      </Link>
      <Link to='/register'>
        <MainButton className='main-font'>SignUp</MainButton>
      </Link>
    </HomeHeaderTxt>
  </HomeHeader>
)

export default Home;