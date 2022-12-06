import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Upload from './components/Upload';
import Edit from './components/Edit';

//Using React Router NPM package to keep SPA but allow different routes for functionality
import {
  Routes,
  Route
} from "react-router-dom";

// Define base urls for front and back end
let frontendBaseURL = process.env.REACT_APP_FRONTEND_URL;
let backendBaseURL = process.env.REACT_APP_BACKEND_URL;

class App extends Component {
  constructor(props) {
		super(props);
    this.state = {
      // this is where we store images from backend in state for use throughout the app
      images: [{
        title: '',
        url: ''
      }],
    };
  }

  // this is the method to get the images and store them in state above
  getImages = () => {
    var headers = {}
    fetch(backendBaseURL, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })

    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            return [];
        }
    })

    .then((data) => {    
        this.setState({
            // Grabbing data from db and updating state when components mount
            images: data.allImages
        })        
    });
  }

  // When app cpmponent mounts, run get images method
  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home 
            images={this.state.images}
          />} />
          <Route path='/upload' element={<Upload 
            placeholderImage={true}
            center
            initialState="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          />} />
          <Route path='/edit' element={<Edit 
            images={this.state.images}
          />} />
        </Routes>
      </div>
    );
  }
}

export default App;
