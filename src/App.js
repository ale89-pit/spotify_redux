import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBarFull";
import { BrowserRouter } from "react-router-dom";
import NavBarFull from "./components/NavBarFull";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./components/Main";
import FooterPlayer from "./components/FooterPlayer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col className="d-none d-sm-flex flex-column ">
              <NavBarFull />
            </Col>
            <Col>
              <Main xs={12} md={9} className="offeset-md-3" />
            </Col>
            <Col>
              <FooterPlayer />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
