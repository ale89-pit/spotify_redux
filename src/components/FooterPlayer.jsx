import { Col, Container, Row } from "react-bootstrap"
import { ChevronDoubleLeft, ChevronDoubleRight, PlayCircle, Repeat, Shuffle } from "react-bootstrap-icons"

const FooterPlayer = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1 ">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 mt-1" id="playerControls">
              <Row className="iconsImg justify-content-center">
                <Col xs={1} className="col-sm-1">
                  <Shuffle className="text-white" />
                </Col>
                <Col xs={1} className="col-sm-1">
                  <ChevronDoubleLeft className="text-white" />
                </Col>
                <Col xs={1} className="col-sm-1">
                  <PlayCircle className="text-white" />
                </Col>
                <Col xs={1} className="col-sm-1">
                  <ChevronDoubleRight className="text-white" />
                </Col>
                <Col xs={1} className="col-sm-1">
                  <Repeat className="text-white" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center py-3" id="playBar">
            <Col xs={12} md={8} lg={6} >
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>)

}

export default FooterPlayer