import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from 'react';
import { MainButton } from "../styles/shared";
import ProfileForm from './ProfileForm';

const Profile = ({ user, updateUser }) => {
  const { fname, lname, email, age, image } = user
  const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <MainButton onClick={() => setEdit(false)}>
            x
          </MainButton>
          <ProfileForm 
            fname={fname}
            lname={lname}
            email={email}
            age={age}
            image={image}
            setEdit={setEdit}
            updateUser={updateUser}
          />
        </>
        :
        <>
          <img 
            src={image ? image : defaultImage}
            alt='profile'
            width='300px'
          />
          <h1>{fname} {lname}</h1>
          <h3>Email: {email}</h3>
          <h3>Age: {age}</h3>
          <MainButton onClick={() => setEdit(true)}>
            Update Profile
          </MainButton>
        </>
      }
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value =>  <Profile {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedProfile;