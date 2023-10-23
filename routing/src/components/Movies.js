import { useEffect, useState } from "react"
import { Movie } from "./Movie";

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/`)
            .then(res => res.json())
            .then(result => {
                setMovies(result.results);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Movies page!</h1>
            {movies.length === 0 && <h1>Loading...</h1>}
            <ul>
                {movies.map(movie => (
                    <Movie key={movie.episode_id} currentMovie={movie} />
                ))}
            </ul>
        </>
    )
}