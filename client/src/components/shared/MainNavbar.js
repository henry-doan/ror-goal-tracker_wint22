import { Link } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will show if the user is login
    if (user) {
      return (
        <>
          <Link to='/dash'>
            <li>Dashboard</li>
          </Link>
          <button onClick={() => handleLogout()}>
            Logout
          </button>
        </>
      )
    } else {
      <>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='/register'>
          <li>Register</li>
        </Link>
      </>
    }
  }

  return(
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;