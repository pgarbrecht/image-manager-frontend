import './App.css';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Upload from './components/Upload';
import ImageTile from './components/ImageTile';
import Edit from './components/Edit';

//Using React Router NPM package to keep SPA but allow different routes for functionality
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload 
          placeholderImage={true}
          center
          initialState="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        />} />
        <Route path='/edit' element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
