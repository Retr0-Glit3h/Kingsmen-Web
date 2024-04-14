import React from 'react';

function Profile({ profileData }) {
  return (
    <div className="profile">
      <img src={profileData.image} alt="Profile" />
      <h2>{profileData.name}</h2>
      <p>Email ID: {profileData.id}</p>
      <p>Address: {profileData.address}</p>
      <p>Chest Size: {profileData.chest}</p>
      <p>Waist Size: {profileData.waist}</p>
      <p>Sleeves Length: {profileData.sleeves}</p>
      <p>Shoulder Width: {profileData.shoulder}</p>
      <p>Height : {profileData.height}</p>
    </div>
  );
}

export default Profile;