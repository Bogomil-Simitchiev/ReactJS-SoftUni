import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import { getAllGames } from "./services/gameService";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import GameDetails from './components/GameDetails/GameDetails';
import EditGame from './components/EditGame/EditGame';
import AuthContext from './contexts/AuthContext';
import { login, logout } from './services/authService';
import Logout from './components/Logout/Logout';

function App() {

    const [games, setGames] = useState([]);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const loginUser = (email, password) => {
        login(email, password).then(result => {
            setUser(result);
            navigate('/');
        }).catch(err => console.log(err))
    }

    const logoutUser = (accessToken) => {
        logout(accessToken).then(result => {
            setUser({});
            navigate('/');
        }).catch(err => console.log(err))
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id === gameId);

            const comments = game.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== gameId),
                { ...game, comments }
            ];
        })
    }

    const addGame = (newGame) => {
        setGames(state => {
            return [...state, newGame];
        })
        navigate('/catalog');

    }

    const editGame = (editedGame, gameId) => {
        setGames(state => {
            const games = state.filter(x => x._id !== gameId);
            games.push(editedGame);
            return games;
        })
        navigate('/catalog');
    }

    useEffect(() => {
        getAllGames()
            .then(games => {
                setGames(games);
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <AuthContext.Provider value={{
            loginUser,
            logoutUser,
            user

        }}>
            <div id="box">
                <Header />
                {/* Main Content */}
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home games={games} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<CreateGame addGame={addGame} />} />
                        <Route path='/catalog' element={<Catalog games={games} />} />
                        <Route path='/details/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
                        <Route path='/edit/:gameId' element={<EditGame games={games} editGame={editGame} />} />
                        <Route path='/logout' element={<Logout />} />


                    </Routes>
                </main>

            </div>
        </AuthContext.Provider>

    );
}

export default App;
