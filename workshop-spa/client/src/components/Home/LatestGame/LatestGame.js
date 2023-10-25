import { Link } from "react-router-dom";

const LatestGame = (props) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={props.game.imageUrl} alt='justPhoto' />
            </div>
            <h3>{props.game.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            
            <div className="data-buttons">
                <Link to={`/details/${props.game._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    )

}

export default LatestGame;