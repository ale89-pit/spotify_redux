import { useParams } from "react-router-dom"
import { addSingleAlbumThunk } from "../redux/action/fetchSerch"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Button, Col, Row, Spinner } from "react-bootstrap"
import { Star } from "react-bootstrap-icons"
import { addTrackFav } from "../redux/action/fetchFavortis"
import ShowAlbum from "./ShowAlbum"


const AlbumPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.searchResult.loading)
    // const singleAlbum = useSelector((state) => state.searchResult.singleAlbum)
    // const album = useSelector((state) => state.searchResult.singleAlbum[0])
    // const tracks = useSelector((state) => state.searchResult.singleAlbum[0].tracks.data)

    dispatch(addSingleAlbumThunk(id))

    useEffect(() => {
    }, [])
    useEffect(() => {
        dispatch(addSingleAlbumThunk(id))
    }, [id])
    // console.log("album :", album)
    // console.log("tracks", tracks)
    // const addtofav = (id) => {
    //     return dispatch(addTrackFav(id))
    // }
    return (
        <Row>

            {loading ? <ShowAlbum /> : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </Row>
    )
}

export default AlbumPage