import { Home, Favs, Detail, Contact } from "Routes";
import App from "App";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/detail/:id",
                    element: <Detail />,
                },
            ],
        },
        {
            path: "/favs",
            element: <Favs />,
            children: [
                {
                    path: "/favs/detail/:id",
                    element: <Detail />,
                },
            ],
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ],
  },
]);

export default router;