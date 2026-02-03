
import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../hook/useFetch";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = ` ${title}/Cinebite`;
  }, [title]);

  if (!movies || movies.length === 0) {
    return <p className="text-center">Loading movies...</p>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
