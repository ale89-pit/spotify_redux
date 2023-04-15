import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardResult from "./CardResult";
import { Button, Col, Container, Row } from "react-bootstrap";
import { addAlbumArtistaThunk } from "../redux/action/fetchSerch";
import { useDispatch, useSelector } from "react-redux";

const ArtistPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { nameArtist } = useParams()
    const [art, setArt] = useState()
    const albumArt = useSelector((state) => state.searchResult.albumArtist[0])
    let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key":
            "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });
    const fetchArtist = async () => {
        try {
            let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id, {
                method: "GET",
                headers,
            })
            if (resp.ok) {
                let data = await resp.json()
                setArt(data)



            }
        } catch (error) {

        }

    }





    useEffect(() => {
        fetchArtist()


    }, [])
    useEffect(() => {
        dispatch(addAlbumArtistaThunk(nameArtist))
    }, [art])


    return (
        <>

            <Col xs={12} className="mt-5">
                <h2 className="titleMain">{art && art.name}</h2>
                <div id="followers">{art && art.nb_fan}</div>
                <div className="d-flex justify-content-center" id="button-container">
                    <Button
                        className=" btn-success mr-2 mainButton"
                        id="playButton"
                    >
                        PLAY
                    </Button>
                    <Button
                        className=" btn-outline-light mainButton "
                        id="followButton"
                    >
                        FOLLOW
                    </Button>
                </div>
            </Col>

            <Row className="mb-3">

                <div className="mt-4 d-flex justify-content-start">
                    <h2 className="text-white font-weight-bold">Tracks</h2>

                </div>
            </Row>
            <Row>
                {albumArt && albumArt.map(album => <CardResult album={album} />)}
            </Row>


            {/* {
        artistpage.map(album=><CardResult album={album}/>)
    } */}
        </>)
}

export default ArtistPage