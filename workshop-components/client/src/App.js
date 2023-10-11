import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/api/users')
            .then(res => res.json())
            .then(result => {
                setUsers(result.users);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />

            <main className="main">

                <section className="card users-container">

                    <Search />
                    <UserList users={users}/>

                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;
