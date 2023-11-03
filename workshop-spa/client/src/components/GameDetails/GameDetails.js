import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import GameContext from "../../contexts/GameContext";
import { addCommentService, getCommentsForCurrentGame } from "../../services/gameService";
import AuthContext from "../../contexts/AuthContext";

const GameDetails = () => {
    const { games } = useContext(GameContext);
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        getCommentsForCurrentGame(gameId).then(result => {
            setComments(result);
        }).catch(err => console.log(err));
    }, [gameId])


    const currentGame = games.find(g => g._id === gameId);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let username = formData.get('username');
        let comment = formData.get('comment');

        const result = `${username}: ${comment}`;
        addCommentService(gameId, result, user.accessToken).then(result => {
            setComments(state => [...state, result]);
            document.getElementById('username').value = '';
            document.getElementById('comment').value = '';

        }).catch(err => console.log(err))

    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} alt='justPhoto' />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">
                    {currentGame.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(c =>
                            <li key={c._id} className="comment">
                                <p>{c.comment}</p>
                            </li>
                        )}
                        {comments.length === 0 && <p className="no-comment">No comments.</p>}
                    </ul>
                </div>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/edit/${currentGame._id}`} className="button">
                        Edit
                    </Link>
                    <Link to={`/delete/${currentGame._id}`} className="button">
                        Delete
                    </Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text"
                        name="username"
                        id="username"
                        placeholder="Name......"
                    />
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Comment......"
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    )

}

export default GameDetails;