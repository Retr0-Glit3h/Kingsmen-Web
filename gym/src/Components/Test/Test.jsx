import React, { useState } from 'react';
import Profile from './Profile';
import EditProfile from './EditProfile';
import './Test.css';
import NavBar from '../Navbar/Navbar';


function Info() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    id: '',
    address: '',
    chest:'',
    waist:'',
    image: '',
    sleeves:'',
    height: '',
    shoulder: '',
   
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = (newData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (<>
    <NavBar />
    <div className="App">
      <h1 className='header'>Profile Page</h1>
      {isEditing ? (
        <EditProfile profileData={profileData} saveChanges={saveChanges} />
      ) : (
        <Profile profileData={profileData} />
      )}
      <button onClick={toggleEdit} className='edit-profile'>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>
      <button onClick={() => handleLogout()} className='logout'>Logout</button>
    </div>
  </>);
}

export default Info;




