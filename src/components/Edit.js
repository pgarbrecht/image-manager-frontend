import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function Edit(props) {
  // we retrieve the image id from the Url parameter
  const imageId = window.location.search.slice(2, window.location.search.length)
  // we use that id to find our image object  
  const thisImage = props.images.find(item => item._id === imageId);
  
  console.log('the image id is ', imageId)
  console.log('this image is ', thisImage)

  // Creating variable for image to edit, using hook to manage state
  let [imageToEdit, setImageToEdit] = useState({
    title: thisImage.title,
    url: thisImage.url,
  })

  // Handle change method for editing an image
  const handleEditChange = (e) => {
    setImageToEdit({
        ...imageToEdit,
        [e.target.id]: e.target.value
    })
    console.log(imageToEdit)
  }

  // Handle submit method for edited exercise
  const handleEditImage = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/images/${imageId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: imageToEdit.title,
            url: imageToEdit.url,
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        } throw new Error(res)
    })
    .then(resJson => {
        window.location.href=`http://localhost:3000`;
    })
    .catch(err => (console.log(err))) 
  }  

  return (
    <div>
      {props.images.map((image, index) => {
        if(image._id == imageId) {
          return (
            <div className='edit-page-container'>
              <Link className='back-button' to='/'>Back</Link>
              <h1>You are now editing {image.title}</h1>
              <form onSubmit={handleEditImage} >
                <label htmlFor='title'>Image Title: </label>
                <input
                  id='title'
                  type='text'
                  value={imageToEdit.title}
                  onChange={handleEditChange}
                >
                </input>
                <input 
                  type='submit'
                  value='Update'
                  className='edit-submit-button'
                />   
              </form>
              <img className='edit-page-image' src={image.url}></img>
            </div>
          )
        }
      }
      )}
      
    </div>
  );
}

export default Edit;