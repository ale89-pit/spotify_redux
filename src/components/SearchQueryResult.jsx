import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import CardResult from "./CardResult"
const SearchQueryResult = (props) => {

    console.log(props)
    return (
        <>

            <Col>
                <h2 className="titleMain">Nome</h2>
            </Col>
            {props.music.map(music => <CardResult album={music} />)}
        </>



    )
}

export default SearchQueryResult