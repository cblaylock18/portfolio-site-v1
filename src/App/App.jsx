import { Link, Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import "./App.module.css";

function App() {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="projects">Projects</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default App;
