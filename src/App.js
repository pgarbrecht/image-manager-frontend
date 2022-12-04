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
        <Route path='/upload' element={<Upload />} />
        <Route path='/edit' element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
