import { Col, Row } from "react-bootstrap"
import CardResult from "./CardResult"

const SerchResult = (props) => {
    let music = props.music
    console.log(music)
    return (
        <Col>
            <h2 className="titleMain ">{props.name}</h2>
           
            <div id="searchResults" className="d-flex w-100" >
                {music.slice(0,5).map(music =><CardResult album={music}/> )} 
            </div>
            
          </Col>           

               
            
       
       
    )
}

export default SerchResult