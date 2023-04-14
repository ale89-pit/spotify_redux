import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBarFull";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarFull from "./components/NavBarFull";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./components/Main";
import FooterPlayer from "./components/FooterPlayer";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Col className="d-none d-sm-flex flex-column ">
              <NavBarFull />
            </Col>
            <Col xs={12} md={9} className="offeset-md-3">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/albumPage/:id" element={<AlbumPage />} />
                <Route path="/artistPage/:id" element={<ArtistPage />} />
              </Routes>
              <FooterPlayer />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
