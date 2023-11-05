import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { addCommentService, deleteCurrentGame, getCommentsForCurrentGame, getGame } from "../../services/gameService";
import AuthContext from "../../contexts/AuthContext";
import GameContext from "../../contexts/GameContext";

const GameDetails = () => {
    const { user } = useContext(AuthContext);
    const { deleteGame } = useContext(GameContext);
    const { gameId } = useParams();
    const [comments, setComments] = useState([]);
    const [currentGame, setGame] = useState({});

    useEffect(() => {
        getCommentsForCurrentGame(gameId).then(result => {
            setComments(result);
        }).catch(err => console.log(err));

        getGame(gameId).then(result => {
            setGame(result);
        }).catch(err => console.log(err));
    }, [gameId])

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

    const delGame = (gameId, accessToken) => {
        deleteCurrentGame(gameId, accessToken).then(() => {
            deleteGame(gameId);
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
                {/* ( for Guests and Users ) */}

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
                {currentGame._ownerId === user._id
                    ? <div className="buttons">
                        <Link to={`/edit/${currentGame._id}`} className="button">
                            Edit
                        </Link>
                        <button onClick={() => delGame(gameId, user.accessToken)} className="button">
                            Delete
                        </button>
                    </div> : <></>
                }

            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}

            {user.email && currentGame._ownerId !== user._id
                ? <article className="create-comment">
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
                </article> : <></>}


        </section>
    )

}

export default GameDetails;