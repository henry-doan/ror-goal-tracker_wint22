import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import MainFooter from './components/shared/MainFooter';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/auth/Dashboard';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Goals from './components/goals/Goals';
import GoalShow from './components/goals/GoalShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/goals' element={<Goals />} />
            <Route path='/goals/:id' element={<GoalShow />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
    <MainFooter />
  </>
)

export default App;
