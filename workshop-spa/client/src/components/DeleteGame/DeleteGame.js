import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import GameContext from "../../contexts/GameContext";
import { deleteCurrentGame } from "../../services/gameService";
import { useParams } from "react-router-dom";

const DeleteGame = () => {
    const { gameId } = useParams();
    const { user } = useContext(AuthContext);
    const { deleteGame } = useContext(GameContext);

    deleteCurrentGame(gameId, user.accessToken).then(() => {
        deleteGame(gameId);
    }).catch(err => console.log(err))

    return null;

}

export default DeleteGame;