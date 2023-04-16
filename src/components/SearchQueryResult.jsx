import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import CardResult from "./CardResult"
const SearchQueryResult = (props) => {

    console.log(props)
    return (
        <>

            <Col xs={12}>
                <h2 className="titleMain">{props.name}</h2>
            </Col>
            {props.music.map(music => <CardResult album={music} />)}
        </>



    )
}

export default SearchQueryResult