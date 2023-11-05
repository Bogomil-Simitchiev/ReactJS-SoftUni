import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateGame from './components/CreateGame/CreateGame';
import Catalog from './components/Catalog/Catalog';
import GameDetails from './components/GameDetails/GameDetails';
import EditGame from './components/EditGame/EditGame';
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import { GamePrider } from './contexts/GameContext';
import IsGuest from './components/common/IsNotLoggedIn';
import IsLoggedIn from './components/common/IsLoggedIn';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Header />
                {/* Main Content */}
                <main id="main-content">
                    <GamePrider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/details/:gameId' element={<GameDetails />} />

                            {/* For people who are logged in */}
                            <Route element={<IsLoggedIn />}>
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                            </Route>

                            {/* For people who are not logged in */}
                            <Route element={<IsGuest />}>
                                <Route path='/create' element={<CreateGame />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/edit/:gameId' element={<EditGame />} />
                            </Route>
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </GamePrider>
                </main>

            </div>
        </AuthProvider >

    );
}

export default App;
