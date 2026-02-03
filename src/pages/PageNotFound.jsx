import { useNavigate } from "react-router-dom";
import Page from "../assets/Page.png";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh-64px-64px)] flex items-center justify-center bg-white">
      <section className="text-center px-4">
        
        <img
          src={Page}
          alt="404 not found"
          className="mx-auto mb-6 max-w-xs"
        />

   

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center
                     bg-blue-600 text-white
                     hover:bg-blue-700
                     px-6 py-3
                     rounded-lg
                     font-medium
                     shadow-md"
        >
          Go Back Home
        </button>

      </section>
    </main>
  );
};

export default PageNotFound;
