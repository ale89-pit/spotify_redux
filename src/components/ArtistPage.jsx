import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardResult from "./CardResult";
import { Container } from "react-bootstrap";

const ArtistPage = () =>{
    const {id} = useParams()
    
    let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key":
          "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
      });
    const fetchArtist = async ()=>{
        try {
            let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" +
            id,  {
                method: "GET",
                headers,
              })
              if (resp.ok){
                let data = await resp.json()
                
              }
        } catch (error) {
            
        }
    }
    
    useEffect(()=>{
        fetchArtist()
    },[])
    return (
       <>
        {/* {
        artistpage.map(album=><CardResult album={album}/>)
    } */}
    </> )
}

export default ArtistPage