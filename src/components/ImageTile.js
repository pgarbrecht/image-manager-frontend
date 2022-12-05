import '../App.css';

function ImageTile(props) {
  return (
    // <Link to ={`/store/${props.id}`}>
            <div>
                <h2 key={props.index}>{props.title}</h2>
                <img className='image-tile' src={props.url} alt={props.title}></img>
            </div>
    // </Link>
  );
}

export default ImageTile;