import { Link } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";
import { MainButton, MainNavUl, MainNavLink } from "../styles/shared";
import Logo from '../../imgs/flatlogo.png';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will show if the user is login
    if (user) {
      return (
        <>
          <MainNavLink to='/dash'>
            <li>Dashboard</li>
          </MainNavLink>
          <MainNavLink to='/profile'>
            <li>Profile</li>
          </MainNavLink>
          <MainNavLink to='/goals'>
            <li>Goals</li>
          </MainNavLink>
          <MainButton onClick={() => handleLogout()}>
            Logout
          </MainButton>
        </>
      )
    } else {
      return(
        <>
          <MainNavLink to='/login'>
            <li>Login</li>
          </MainNavLink>
          <MainNavLink to='/register'>
            <li>Register</li>
          </MainNavLink>
        </>
      )
    }
  }

  return(
    <>
      <nav>
        <MainNavUl>
          <MainNavLink to='/'>
            <img src={Logo} alt='logo' height='60px' />
          </MainNavLink>
          { rightNavItems() }
        </MainNavUl>
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