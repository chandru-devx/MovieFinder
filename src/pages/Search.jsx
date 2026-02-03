import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
useSearchParams
const search = ({ apiPath }) => {


  const [searchParams] = useSearchParams();// useSearchParams means = ?

  const queryTerm = searchParams.get("q")


  // console.log(queryTerm)

  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = ` ${queryTerm}/Cinebite`;
  }, [queryTerm]);





  return (
    <main>

      <section className="text-3xl text-black-200">
        {movies.length === 0
          ? `No results found for "${queryTerm}"`
          : `Results for "${queryTerm}"`}
      </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );

}

export default search