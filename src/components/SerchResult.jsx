import { Col, Row } from "react-bootstrap"
import CardResult from "./CardResult"

const SerchResult = (props) => {
    let music = props.music
    console.log(music)
    return (
        <Col xs={10}>
            <h2>{props.name}</h2>
            <Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            <div id="searchResults" style={{ display: "block" }}>
                {/* {music.map(music =><CardResult album={music}/> )} */}
            </div>
            </Row>
          </Col>           

               
            
       
       
    )
}

export default SerchResult