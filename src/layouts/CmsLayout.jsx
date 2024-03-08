import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom"
import "../styles/cms/style.scss";
import { Navmenu } from "../components/Navmenu";

export const CmsLayout = () => {
    return <Container fluid>
        <Navmenu/>
        <Outlet />
    </Container>;
}