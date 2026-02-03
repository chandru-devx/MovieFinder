import { useState, useEffect } from "react";

const useFetch = (apiPath, qureyTerm = "") => {
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzkxYmQxY2E3OGQ4MjliMDdhODBlZjFmMzdlZWY0YyIsIm5iZiI6MTc2OTg0MTQ5MC4xOTcsInN1YiI6IjY5N2RhMzUyYjFlYjQyNGU0MzczODc2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1nfMOD4MZeDsEcoznOp4t_TjI6MakdpkSMXabRSzl4Q'
    }
  };


  useEffect(() => {
    async function fetchData() {
      const response = await fetch (
        `https://api.themoviedb.org/3/${apiPath}?query=${qureyTerm} `,
        options
      );

      const data = await response.json();
      setData(data.results);
    }

    fetchData();
  }, [apiPath, qureyTerm]);

  return { data };
};

export default useFetch;
