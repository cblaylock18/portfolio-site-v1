import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import ScrollToAnchor from "../Components/ScrollToAnchor/ScrollToAnchor";

function App() {
    return (
        <>
            <ScrollToAnchor />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export { App };
