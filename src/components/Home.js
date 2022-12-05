import '../App.css';
import ImageTile from './ImageTile'

function Home(props) {

  return (
    <div>
      <p>Home</p>
      <h2>{props.images.length} Images</h2>
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
      {/* <ImageTile /> */}
    </div>
  );
}

export default Home;