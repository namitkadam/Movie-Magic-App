import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/index.jsx";
import RootLayout from "../Root/index.js";
import Movie from "../Pages/Movie/index.jsx";
import DiscoverdHome from "../components/DiscoverdHome/index.jsx";
import GenresHome from "../components/GenresHome/index.jsx";
import SearchHome from "../components/SearchHome/index.jsx";

export const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:mediaType/:id/", element: <Movie /> },
      { path: "/genres/:name/:id/", element: <GenresHome /> },
      { path: "/discover/:discoverName", element: <DiscoverdHome /> },
      { path: "/search/:search", element: <SearchHome /> },
    ],
  },
]);
