import { useParams } from "react-router-dom";

const EditGame = ({ games, editGame }) => {
    const { gameId } = useParams();
    const currentGame = games.find(g => g._id === gameId);

    const editHandler = (e) => {
        e.preventDefault();

        const editedGame = Object.fromEntries(new FormData(e.target));
        editedGame._id = currentGame._id;
        editGame(editedGame, gameId);
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