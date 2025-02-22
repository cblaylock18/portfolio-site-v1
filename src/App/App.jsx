import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { ThemeProvider } from "../Context/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ThemeProvider>
    );
}

export { App };
