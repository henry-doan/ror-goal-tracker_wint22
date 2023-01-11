import { useState, useEffect } from 'react';
import { MainButton } from '../styles/shared';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ProfileForm = ({ fname, lname, email, age, image, setEdit, updateUser }) => {
  const [user, setUser] = useState({ fname: '', lname: '', email: '', age: '', image: null })
  const [file, setFile] = useState()

  useEffect( () => {
    setUser({ fname, lname, email, age, image })
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setUser({ fname, lname, email, age, image: fileItems[0].file })
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setUser({ fname, lname, email, age, image: null })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user)
    setEdit(false)
    setUser({ fname: '', lname: '', email: '', age: '', image: null })
  }

  return (
    <>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>First Name</label>
        <input
          required
          name='fname'
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          name='lname'
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <label>Age</label>
        <input
          type='number'
          required
          name='age'
          value={user.age}
          onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
        />
        <FilePond
          files={file}
          onupdatefiles={handleFileUpdate}
          onremovefile={handleFileRemoved}
          allowMultiple={false}
          name="image"
          labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <MainButton type='submit'>Submit</MainButton>
      </form>
    </>
  )
}

export default ProfileForm;