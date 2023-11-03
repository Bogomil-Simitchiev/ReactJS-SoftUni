import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import GameContext from "../../contexts/GameContext";

const GameDetails = () => {
    const { games, addComment } = useContext(GameContext);
    const [errors, setErrors] = useState({
        username: '',
        comment: '',
    })
    const { gameId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: ''
    })

    const currentGame = games.find(g => g._id === gameId);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const result = `${comment.username}: ${comment.comment}`;
        addComment(gameId, result);
    }

    const validateUsername = (e) => {
        const username = e.target.value;
        if (username.length < 3) {
            setErrors(state => ({
                ...state,
                username: 'Username must be at least 3 characters long'
            }))
        }
        else {
            setErrors(state => ({
                ...state,
                username: ''
            }))
        }
    }

    const onChangeHandler = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
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
                        {currentGame.comments?.map(c =>
                            <li className="comment">
                                <p>{c}</p>
                            </li>
                        )}
                        {!currentGame.comments && <p className="no-comment">No comments.</p>}
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
                        placeholder="Name......"
                        value={comment.username}
                        onBlur={validateUsername}
                        onChange={onChangeHandler}
                    />
                    {errors.username && <p style={{ color: 'lightcoral' }}>{errors.username}</p>}
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment.comment}
                        onChange={onChangeHandler}
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