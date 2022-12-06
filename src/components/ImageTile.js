import { Link } from "react-router-dom";
import '../App.css';

function ImageTile(props) {
  // Handle delete image method
  const handleDeleteImage = (id) => {
    fetch(`http://localhost:3001/images/${id}`, {
    method: 'DELETE'
    }).then( response => {
    const findIndex = props.images.findIndex(image => image._id === id)
    const copyImages = [...props.images]
    copyImages.splice(findIndex, 1)
    props.setState({images: copyImages})
    console.log('got to bottom of handle delete');
    }).then(window.location.href=`http://localhost:3000`)
}

  return (
    <div>
      <div className='image-tile-label'>
        <h2 key={props.index}>{props.title}</h2>
        <div className='edit-delete-flexbox'>
          <button className='edit-btn'>
            <Link to={`/edit?=${props.id}`} >
              <span className="material-symbols-outlined">
                edit
              </span>
            </Link>
          </button>
          <button className='delete-btn' onClick={()=> {handleDeleteImage(props.id)}}>
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
      <img className='image-tile' src={props.url} alt={props.title}></img>
    </div>
  );
}

export default ImageTile;