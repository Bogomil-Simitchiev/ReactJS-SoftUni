import './App.css';
import { useState } from 'react';

function App() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('female');
    const [userType, setUserType] = useState('individual');
    const [confirmTerms, setConfirmTerms] = useState(true);


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(username);
        console.log(password);
        console.log(age);
        console.log(gender);
        console.log(userType);
        console.log(confirmTerms)
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='username'>Username:</label><br />
                        <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label><br />
                        <input type='text' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label><br />
                        <input type='number' id='age' name='age' value={age} onChange={(e) => setAge(Number(e.target.value))} />
                    </div>
                    <div>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor='individual'>Individual:</label>
                        <input type='radio' id='individual' name='userType' value='individual' checked={userType === 'individual'} onChange={(e) => setUserType(e.target.value)} /><br />
                        <label htmlFor='corporate'>Corporate:</label>
                        <input type='radio' id='corporate' name='userType' value='corporate' checked={userType === 'corporate'} onChange={(e) => setUserType(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='terms'>Terms confirm:</label>
                        <input type='checkbox' id='terms' name='terms' checked={confirmTerms} onChange={(e) => setConfirmTerms(oldState => !oldState)} />
                    </div>

                    <input type='submit' value='Login' />
                </form>
            </header>
        </div>
    );
}

export default App;
