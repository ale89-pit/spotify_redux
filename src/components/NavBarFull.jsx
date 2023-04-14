import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBarFull = () => {
  return (
    <Nav className="navbar navbar-expand-md navbar-white bg-navbar d-flex flex-column fixed-left justify-content-between"id="sidebar">
      <div className="nav-container">
        <Link  to="/">
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
                <Link class="nav-item nav-link" to="/favorits"
                ><i class="fas fa-book-open fa-lg"></i>&nbsp; Your
                  Library</Link>
              </Nav.Item>
              </div>

                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div
                    class="input-group-append"
                    style={{marginbottom: "4%"}}
                  >
                    <Button
                      class="btn btn-outline-secondary btn-sm"
                      type="button"
                      id="button-addon1"
                      onClick="search()"
                    >
                      GO
                    </Button>
                  </div>
                </div>
              
          </Nav>
        </div>
      </div>
      <div class="nav-btn">
        <Button class="btn signup-btn" type="button">Sign Up</Button>
        <Button class="btn login-btn" type="button">Login</Button>
        <Link to="/">Cookie Policy</Link> |
        <Link to="/"> Privacy</Link>
      </div>
    </Nav>
           
      
        
    )
}

export default NavBarFull