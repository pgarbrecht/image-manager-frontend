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
    // <Link to ={`/store/${props.id}`}>
            <div>
                <h2 key={props.index}>{props.title}</h2>
                <button onClick={()=> {handleDeleteImage(props.id)}}>
                  Delete
                </button>
                <img className='image-tile' src={props.url} alt={props.title}></img>
            </div>
    // </Link>
  );
}

export default ImageTile;