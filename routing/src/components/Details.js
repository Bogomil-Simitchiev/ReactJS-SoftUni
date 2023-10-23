import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Details = () => {
    const [movie, setMovie] = useState({});

    const { movieId } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${movieId}`)
            .then(res => res.json())
            .then(result => setMovie(result))
            .catch(err => console.log(err))
    }, [movieId])

    return (
        <>
            <h1>Details page for {movie.title}!</h1>
            <p>Producer: {movie.producer}</p>
            <p>Director: {movie.director}</p>

        </>
    )
}