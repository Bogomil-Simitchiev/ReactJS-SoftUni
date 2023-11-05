import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import { Navigate, Outlet, useParams } from "react-router-dom";
import GameContext from "../../contexts/GameContext";

const IsGuest = () => {
    const { user } = useContext(AuthContext);
    const { games } = useContext(GameContext);
    const { gameId } = useParams();

    if (!user.email) {

        return <Navigate to='/login' replace />
    } else {
        const currentGame = games.find(game => game._id === gameId);
        if (currentGame) {
            if ((currentGame?._ownerId === user._id) === false) {
                return <Navigate to='/' replace />
            } else {
                return <Outlet />
            }
        } else {
            return <Outlet />

        }

    }

}

export default IsGuest;