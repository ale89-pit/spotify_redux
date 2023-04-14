import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardResult = (props) => {
   console.log(props.album)

    return (
        <Col className="col text-center" id=""> {/*${songInfo.id} */}
            <Link to="/">                       {/*/album_page.html?id=${songInfo.album.id} */}
                < img className="img-fluid" src="" alt="1" />
            </Link>
            <p>
                <Link to="/album_page.html?id=${songInfo.album.id}">
                    
                </Link>
                <Link to="/artist_page.html?id=${songInfo.artist.id}">
                   
                </Link>
            </p>
        </Col>
        )
}

export default CardResult