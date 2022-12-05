import '../App.css';
import { Link } from "react-router-dom";
import ImageTile from './ImageTile'

function Home(props) {

  return (
    <div className='home-container'>
      <div className='home-top-utilitybox'>
        <p className='search'>Search</p>
        <Link className='upload-button' to='/upload'>UPLOAD</Link>
      </div>
      <div className='home-grid-container'>
        <h2 className='home-counter'>{props.images.length} Images</h2>
        <div className='home-grid'>
        {props.images.map((image, index) => {
          return (
            <ImageTile
              key={index}
              index={index}
              id = {image._id}
              title = {image.title}
              url = {image.url}
            />
          )
        }
        )}
        </div>
      </div>
    </div>
  );
}

export default Home;