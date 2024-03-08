import { Container, Navbar, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Navmenu = () =>
    <Row>
        <Navbar expand="lg" bg="light">
            <Container>
                <Link to="/" className="navbar-brand">
                    {import.meta.env.VITE_APP_NAME}
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to="#" className="nav-link">
                                <i className="fa-solid fa-users me-2" />Staffs
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link to="#" className="nav-link">
                                {/* <i className="fa-solid fa-bring-front"></i> */}
                                <i className="fa-solid fa-clipboard me-2"></i>
                                Order
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Row>