import React, { useEffect, useState } from "react";
import '../App.css';

function Upload(props) {
  const initialState = props.initialState; // initialState is the placeholder image
  const [imageState, setImageState] = useState(); // state and state-setter for image
  const [previewUrl, setPreviewUrl] = useState(() => initialState); // state and state-setter for img preview src url

  useEffect(() => {
    if (!imageState) {
      return;
    }
    const fileReader = new FileReader(); // lets us read files on the computer
    // As soon as it's done loading the file, set the preview img src url state to the result
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result); // setting src to result.
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
    console.log("submitting image");
    const postdata = JSON.stringify({
      base64string: previewUrl.split("base64,")[1],
    });
    const url = "http://localhost:3001/images/imageupload";
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log("eventlistener reached");
        console.log(this.responseText);
      }
    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log("onload ocurred");
    };
    xhr.send(postdata);
  };

  return (
    <div className="form-control">
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
        <button onClick={(e) => handleSubmit(e)}>SUBMIT</button>
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