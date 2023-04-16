import { Button } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Star } from "react-bootstrap-icons"
import { addTrackFavThunk } from "../redux/action/fetchFavortis"
import Spinner from 'react-bootstrap/Spinner'
const ShowAlbum = () => {
    const album = useSelector((state) => state.searchResult.singleAlbum[0])
    const tracks = useSelector((state) => state.searchResult.singleAlbum[0].tracks.data)
    const dispatch = useDispatch()
    return (
        <> <Col>

            <img src={album.cover} class="card-img img-fluid" alt="Album" />
            <div class="mt-4 text-center">
                <p class="album-title">{album.title}</p>
            </div>
            <div class="text-center">
                <p class="artist-name">{album.artist.name}</p>
            </div>
            <div class="mt-4 text-center">
                <Button id="btnPlay" class="btn btn-success" type="button">Play</Button>
            </div>

        </Col>
            <Col>
                {tracks.map(track => <div class="py-3 trackHover">
                    <a href="#" class="card-title trackHover px-3" style={{ color: "white" }} >{
                        track.title
                    }</a>
                    <Star class="text-white" onClick={() => dispatch(addTrackFavThunk(track.id))}></Star>
                    <small class="duration" style={{ color: "white" }}>{Math.floor(
                        parseInt(track.duration) / 60 // setting the duration minutes
                    )}:{
                            parseInt(track.duration) % 60 < 10
                                ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                                : parseInt(track.duration) % 60
                        }</small>
                </div>)}
            </Col>
        </>)
}

export default ShowAlbum