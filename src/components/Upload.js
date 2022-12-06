import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

// Define base urls for front and back end
let frontendBaseURL = process.env.REACT_APP_FRONTEND_URL;
let backendBaseURL = process.env.REACT_APP_BACKEND_URL;

function Upload(props) {
  const initialState = props.initialState; // initialState is the placeholder image
  const [imageState, setImageState] = useState(); // state and state-setter for image
  const [previewUrl, setPreviewUrl] = useState(() => initialState); // state and state-setter for img preview src url
  let uploadedImageUrl = '';

  useEffect(() => {
    if (!imageState) {
      return;
    }
    const fileReader = new FileReader(); // lets us read files on the computer
    // As soon as it's done loading the file, set the preview img src url state to the result
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result); // setting src to result
    };

    console.log("inside useeffect");
    fileReader.readAsDataURL(imageState);
  }, [imageState]);

  // selected image handler
  const onChangeImageHandler = (event) => {
    const filesArray = event.target.files;
    let imageFile;
    if (filesArray && filesArray.length === 1) {
      imageFile = filesArray[0];
      console.log("inside onChangeImageHandler");
      console.log(imageFile);
      setImageState(() => imageFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //uploading image file to imgbb api
    console.log("submitting image");
    const postdata = JSON.stringify({
      base64string: previewUrl.split("base64,")[1],
    });
    const url = backendBaseURL + "/imageupload";
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log("eventlistener reached");
        console.log('here is response text', this.responseText);
        uploadedImageUrl = this.responseText.substring(50, this.responseText.length - 2);
        console.log('uploaded image url when updated is', uploadedImageUrl);
      }
    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log("onload ocurred");
    };
    xhr.send(postdata);

    // we set a delay here so that the image variable can update before we fetch
    setTimeout(() => { 
    console.log('uploaded image url before fetch is', uploadedImageUrl);
    //creating object in backend database, using uploaded image url from above
    fetch(backendBaseURL + '/new', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: 'Unnamed',
          url: uploadedImageUrl
      }),
      credentials: 'include',
    })

    // If we can fetch the data from this route, then proceed
    .then (res => { 
        if(res.ok) {
            return res.json()
        }
        throw new Error(res)
    })

    .then (resJson => {
        window.location.href=frontendBaseURL
    })
    .catch(err => (console.log(err)))

    }, 300);
  };

  return (
    <div className="form-control">
      <Link className='back-button' to='/'>Back</Link>
      <h1>
        {props.placeholderImage
          ? "Hi there! Upload your image below"
          : "Select an image to upload"}
      </h1>
      <form id="form" encType="multipart/form-data">
        <input
          id="imageUpload"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={(e) => onChangeImageHandler(e)}
        />
        <button onClick={(e) => handleSubmit(e)} className='add-image-submit-button'>SUBMIT</button>
      </form>
      <div id="prev"></div>
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please pick an image</p>}
        </div>
      </div>
    </div>
  );
}

export default Upload;