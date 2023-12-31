import { useParams } from "react-router-dom";
import { editCurrentGame, getGame } from "../../services/gameService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import GameContext from "../../contexts/GameContext";

const EditGame = () => {
    const { editGame } = useContext(GameContext);
    const { gameId } = useParams();
    const { user } = useContext(AuthContext);
    const [currentGame, setGame] = useState({});

    useEffect(() => {
        getGame(gameId).then(result => {
            setGame(result);
        }).catch(err => console.log(err));
    }, [gameId])


    const editHandler = (e) => {
        e.preventDefault();

        const editedGame = Object.fromEntries(new FormData(e.target));
        editCurrentGame(editedGame, gameId, user.accessToken).then(result => {
            editGame(result, gameId);
        }).catch(err => console.log(err));
    }


    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentGame.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentGame.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={currentGame.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentGame.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={currentGame.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}

export default EditGame;