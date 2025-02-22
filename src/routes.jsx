import { App } from "./App/App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Home } from "./Components/Home/Home";
import { Projects } from "./Components/Projects/Projects";
import { About } from "./Components/About/About";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
];

export default routes;
