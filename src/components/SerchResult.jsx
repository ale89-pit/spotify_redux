import { Col, Row } from "react-bootstrap"
import CardResult from "./CardResult"
import { useState } from "react"
import { useSelector } from "react-redux"

const SerchResult = (props) => {
    let musicArtResult = props.music
    console.log(props.music)
    const music0 = props.music[0]
    const music1 = props.music[1]
    const music2 = props.music[2]
    const music3 = props.music[3]


    // for (let i = 0; i < musicArtResult.length; i++) {
    //     setMusic(musicArtResult[i])
    // }
    // console.log(music)
    return (
        <>




            {/* {music.slice(0, 1).map((art) => {
                return <h2 className="titleMain ">{art.artist.name}</h2>
            }
            )} */}


            {/* <div id="searchResults" className="d-flex w-100" > */}

            {/* </div> */}


            <Col xs={12}>
                <h2 className="titleMain">{props.name}</h2>
            </Col>

            {music0 && music0.slice(0, 1).map(music => <CardResult album={music} />)}
            {music1 && music1.slice(0, 1).map(music => <CardResult album={music} />)}
            {music2 && music2.slice(0, 1).map(music => <CardResult album={music} />)}
            {music3 && music3.slice(0, 1).map(music => <CardResult album={music} />)}



        </>




    )
}

export default SerchResult