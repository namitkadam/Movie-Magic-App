import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/index.jsx";
import RootLayout from "../Root/index.js";
import Movie from "../Pages/Movie/index.jsx";
import DiscoverdHome from "../components/DiscoverdHome/index.jsx";
import GenresHome from "../components/GenresHome/index.jsx";
import SearchHome from "../components/SearchHome/index.jsx";

export const PublicRouter = createBrowserRouter([
  {
    path: "/Movie-Magic-App",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Movie-Magic-App/:mediaType/:id/", element: <Movie /> },
      { path: "/Movie-Magic-App/genres/:name/:id/", element: <GenresHome /> },
      {
        path: "/Movie-Magic-App/discover/:discoverName",
        element: <DiscoverdHome />,
      },
      { path: "/Movie-Magic-App/search/:search", element: <SearchHome /> },
    ],
  },
]);
