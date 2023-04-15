import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import SerchResult from "./SerchResult"
import { useEffect, useState } from "react"
import { addAlbumArtistaThunk } from "../redux/action/fetchSerch"
import { useDispatch, useSelector } from "react-redux"
const Main = () => {
  const dispatch = useDispatch()
  const rock = useSelector((state) => state.searchResult.rock)
  const pop = useSelector((state) => state.searchResult.pop)
  const hipHop = useSelector((state) => state.searchResult.hipHop)
  // const rock = []
  // const pop = []
  // const hipPop = []
  // const [rock,setRock]=useState([])
  // const [pop,setPop] = useState([])
  // const [hipPop,setHipPop]= useState([])
  let rockArtists = [
    'queen',
    'u2',
    'thepolice',
    'eagles',
    'thedoors',
    'oasis',
    'thewho',
    'bonjovi',
  ]

  let popArtists = [
    'maroon5',
    'coldplay',
    'onerepublic',
    'jamesblunt',
    'katyperry',
    'arianagrande',
  ]

  let hipHopArtists = [
    'eminem',
    'snoopdogg',
    'lilwayne',
    'drake',
    'kanyewest',
  ]
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });


  //  const handleArtist = async (artistName, typemusic) => {
  //   // artistName = "eminem", "metallica", etc...
  //   // domQuerySelector = "#rockSection" etc...
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
  //       artistName,
  //       {
  //         method: 'GET',
  //         headers,
  //       }
  //     ) // gets the information
  //     if (response.ok) {
  //       let result = await response.json()
  //       if(typemusic==="rock"){
  //           setRock(result.data)
  //       } else if(typemusic==="pop"){
  //           setPop(result.data)
  //       }else{
  //           setHipPop(result.data)
  //       }// transforms the response to json

  //       // create a new album tyle
  //     } else {
  //       console.log('error')
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  const randomresult = () => {
    let rockRandomArtists = []
    let popRandomArtists = []
    let hipHopRandomArtists = []

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist =
        rockArtists[Math.floor(Math.random() * rockArtists.length)] // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist) // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist)
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist)
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      dispatch(addAlbumArtistaThunk(rockRandomArtists[j], 'rock'))

    for (let k = 0; k < popRandomArtists.length; k++)
      dispatch(addAlbumArtistaThunk(popRandomArtists[k], 'pop'))

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      dispatch(addAlbumArtistaThunk(hipHopRandomArtists[l], 'hipHop'))

  }


  console.log("rock album", rock)
  console.log("pop album", pop)
  console.log("hipHop album", hipHop)
  useEffect(() => {
    randomresult()
  }, [])

  // console.log(rock)
  // console.log(pop)
  // console.log(hipPop)

  return (
    <>
      {/* <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex justify-content-between">
          <Link href="#">TRENDING</Link>
          <Link href="#">PODCAST</Link>
          <Link href="#">MOODS AND GENRES</Link>
          <Link href="#">NEW RELEASES</Link>
          <Link href="#">DISCOVER</Link>
        </Col>
      </Row> */}
      <Row >

        <SerchResult music={pop} xs={10} name="pop" />
      </Row>
      <Row>
        <SerchResult music={rock} xs={10} name="Rock" />
      </Row>
      <Row>
        <SerchResult music={hipHop} xs={10} name="HipPop" />
      </Row>
    </>
  )


}
export default Main