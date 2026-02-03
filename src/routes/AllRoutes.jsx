import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {


    return (
        // Routes Looks at the URL and decides which page to show.
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
            {/* Route Matches a path to a component. */}
            <Route path="movie/:id" element={<MovieDetails />} />

            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular/Movie" />} />

            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="top_rated/Movie" />} />

            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming/Movie" />} />

            <Route path="search" element={<Search apiPath="search/movie" />} />

            <Route path="*" element={<PageNotFound />} />

        </Routes>

    )

};


// BrowserRouter → listens to URL

// Routes → matches URL

// Route → renders component

// AllRoutes must be inside App

// Miss any one → UI won’t update.
