import { useParams } from "react-router-dom"
import { addSingleAlbumThunk } from "../redux/action/fetchSerch"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Button, Col, Row } from "react-bootstrap"


const AlbumPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    dispatch(addSingleAlbumThunk(id))
    const album = useSelector((state) => state.searchResult.singleAlbum[0])
    console.log("album :", album)
    const tracks = useSelector((state) => state.searchResult.singleAlbum[0].tracks.data)
    console.log("tracks", tracks)
    useEffect(() => {

    }, [id])
    return (
        <Row>
            <Col> <img src={album.cover} class="card-img img-fluid" alt="Album" />
                <div class="mt-4 text-center">
                    <p class="album-title">{album.title}</p>
                </div>
                <div class="text-center">
                    <p class="artist-name">{album.artist.name}</p>
                </div>
                <div class="mt-4 text-center">
                    <Button id="btnPlay" class="btn btn-success" type="button">Play</Button>
                </div></Col>
            <Col>
                {tracks && tracks.map(track => <div class="py-3 trackHover">
                    <a href="#" class="card-title trackHover px-3" style={{ color: "white" }} >{
                        track.title
                    }</a>
                    <small class="duration" style={{ color: "white" }}>{Math.floor(
                        parseInt(track.duration) / 60 // setting the duration minutes
                    )}:{
                            parseInt(track.duration) % 60 < 10
                                ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                                : parseInt(track.duration) % 60
                        }</small>
                </div>)}
            </Col>
        </Row>
    )
}

export default AlbumPage