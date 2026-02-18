import { Link } from "react-router-dom"
import backup from "../assets/backup.jpg"
const Card = ({ movie }) => {


    const { id, original_title, poster_path, overview } = movie
    
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: backup
    return (
        <Link to={`/movie/${id}`} className="group">
            <div className="bg-slate-900 max-w-sm mx-auto rounded-xl overflow-hidden border border-slate-800
                  transition-transform duration-300 hover:scale-[1.05]">

                <img
                    src={image}
                    alt={original_title}
                    className="w-full   object-cover"
                />

                <div className="p-5">
                    <h5 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {original_title}
                    </h5>

                    <p className="text-sm text-slate-400 line-clamp-3">
                        {overview}
                    </p>
                </div>
            </div>
        </Link>


    )
}

export default Card