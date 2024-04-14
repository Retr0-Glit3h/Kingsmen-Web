import React, { useState, useEffect } from 'react';

function EditProfile({ profileData, saveChanges }) {
  const [editedData, setEditedData] = useState(profileData);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load form data from local storage if available
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setEditedData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    saveChanges({ ...editedData, image: selectedImage });
    // Save form data to local storage
    localStorage.setItem('profileData', JSON.stringify({ ...editedData, image: selectedImage }));
  };

  return (
    <div className="edit-profile">
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onChange={handleImageChange}
      />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      <input
        type="text"
        name="name"
        value={editedData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        value={editedData.id}
        onChange={handleInputChange}
      />
       <input
        type="text"
        name="address"
        value={editedData.address}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="chest"
        value={editedData.chest}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="waist"
        value={editedData.waist}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="sleeves"
        value={editedData.sleeves}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="shoulder"
        value={editedData.shoulder}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="height"
        value={editedData.height}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}

export default EditProfile;
