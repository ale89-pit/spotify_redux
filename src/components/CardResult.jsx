import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardResult = (props) => {


  return (
    <>

      <Col className=" text-center" id={props.album.album.id}>
        <Link to={`/albumPage/${props.album.album.id}`} replace={true} >
          <img class="img-fluid" src={props.album.album.cover_medium} alt="1" />
        </Link>

        <Link to={`/AlbumPage/${props.album.album.id}`}>
          <p>{props.album.title}</p>

        </Link>
        <Link to={`/artistPage/${props.album.artist.id}/${props.album.artist.name}`}>
          Artist:{props.album.artist.name}
        </Link>

      </Col >
    </>
  )
}

export default CardResult