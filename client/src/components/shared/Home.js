import { Link } from 'react-router-dom';

const Home = () => (
  <>
    {/* Find big header pic */}
    <h1>Find a qoute here</h1>
    <Link to='/login'>
      <button>Login</button>
    </Link>
    <Link to='/register'>
      <button>SignUp</button>
    </Link>
  </>
)

export default Home;