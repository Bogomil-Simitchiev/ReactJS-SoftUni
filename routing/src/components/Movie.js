import { Link } from "react-router-dom";

export const Movie = (props) => {
    const movieId = props.currentMovie.url.split('/')[5];
    return (

        <li><Link to={`/movies/${movieId}`}>{props.currentMovie.title}</Link></li>
    )
}