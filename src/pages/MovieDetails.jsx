import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../hook/Option";
 import BackUpImage from "../assets/BackUpImage.jpg"


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // ✅ FETCH MOVIE
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  // ✅ SET DOCUMENT TITLE (SAFE)
  useEffect(() => {
    if (movie?.original_title) {
      document.title = `${movie.original_title} | Cinebite`;
    }
  }, [movie]);

  // ⛔ RETURN AFTER ALL HOOKS
  if (!movie) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const {
    original_title,
    poster_path,
    backdrop_path,
    overview,
    genres,
  } = movie;

  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : BackUpImage;

  const backdropImage = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : "";

  return (
    <>
      <div
        className="
    min-h-[100vh] 
    lg:h-[90vh] 
    bg-cover bg-center relative
  "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.3)),
    url(${backdropImage})`,
        }}
      >
        <div className="absolute inset-0 flex  ">
          <div className="max-w-7xl mx-auto w-fullpx-4 sm:px-6 lg:px-8 pb-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center">
            {/* POSTER */}
            <img
              src={posterImage}
              alt={original_title}
              className=" w-48 sm:w-60 lg:w-72 rounded-xl shadow-2xl mx-auto lg:mx-0 justify-center items-center" />

            {/* INFO */}
            <div className="text-white max-w-2xl text-center lg:text-left">
              <h1
                className="
            text-2xl sm:text-3xl lg:text-5xl
            font-bold mb-4
          "
              >
                {original_title}
              </h1>

              <p
                className="
            text-slate-200
            text-sm sm:text-base
            mb-6
          "
              >
                {overview}
              </p>

              {/* GENRES */}
              <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                {genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="
                px-3 py-1
                bg-white/20
                rounded-full
                text-xs sm:text-sm
              "
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* META INFO */}
              <div
                className="
            flex flex-wrap
            gap-4 sm:gap-6
            justify-center lg:justify-start
            text-xs sm:text-sm
            text-slate-300
            mt-5
          "
              >
                <span>⭐ {movie.vote_average}</span>
                <span>👥 {movie.vote_count}</span>
                <span>🗓 {movie.release_date}</span>
                <span>⏱ {movie.runtime} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default MovieDetails;
