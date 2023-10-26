import { useState } from "react";
import { useParams } from "react-router-dom"

const GameDetails = ({ games, addComment }) => {
    const { gameId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: ''
    })

    const currentGame = games.find(g => g._id === gameId);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const result = `${comment.username}: ${comment.comment}`;
        console.log(result);
        addComment(gameId, result);
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
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="Name......" value={comment.username} onChange={onChangeHandler} />
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