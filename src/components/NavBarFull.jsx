import { useState } from "react"
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addAlbumArtistaThunk, addQueryResult } from "../redux/action/fetchSerch"

const NavBarFull = () => {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const querySearch = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }
  const search = (e) => {
    e.preventDefault()
    dispatch(addAlbumArtistaThunk(query))
    setQuery('')
  }
  return (
    <>
      <Nav className="navbar navbar-expand-md navbar-white bg-navbar d-flex flex-column fixed-left justify-content-between" id="sidebar">
        <div className="nav-container">
          <Link to="/">
            <Navbar.Brand> <img
              src="logo/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            /></Navbar.Brand>
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="d-flex flex-column">
              <div>
                <Nav.Item>
                  <Link className="nav-item nav-link" to="/"
                  ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-item nav-link" to="/favorits"
                  ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library</Link>
                </Nav.Item>
              </div>

              <Form className="input-group mt-3" onSubmit={search}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={querySearch}
                  className="form-control mb-2"

                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div
                  className="input-group-append"
                  style={{ marginbottom: "4%" }}
                >
                  <Button
                    className="btn-outline-secondary btn-sm"
                    type="submit"
                    id="button-addon1"

                  >
                    GO
                  </Button>
                </div>
              </Form>

            </Nav>
          </div>
        </div>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">Sign Up</Button>
          <Button className="btn login-btn" type="button">Login</Button>
          <Link to="/">Cookie Policy</Link> |
          <Link to="/"> Privacy</Link>
        </div>
      </Nav>

    </>


  )
}

export default NavBarFull