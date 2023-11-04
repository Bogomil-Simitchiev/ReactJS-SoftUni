import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllGames } from "../services/gameService";

const GameContext = createContext();

export default GameContext;

export const GamePrider = ({ children }) => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    const addGame = (newGame) => {
        setGames(state => {
            return [...state, newGame];
        })
        navigate('/catalog');

    }

    const editGame = (editedGame, gameId) => {
        setGames(state => {
            const games = state.map(x => x._id === gameId ? editedGame : x);
            return games;
        })
        navigate(`/details/${gameId}`);
    }

    const deleteGame = (gameId) => {
        setGames(state => {
            const games = state.filter(x => x._id !== gameId);
            return games;
        })
        navigate('/');
    }

    useEffect(() => {
        getAllGames()
            .then(games => {
                setGames(games);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <GameContext.Provider value={{
            games,
            addGame,
            editGame,
            deleteGame
        }}
        >
            {children}
        </GameContext.Provider>
    )

}