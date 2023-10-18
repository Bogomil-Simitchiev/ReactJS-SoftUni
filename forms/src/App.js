import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        gender: 'male',
        userType: 'corporate',
        confirmTerms: false
    })

    const infoRef = useRef();

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked
                : e.target.type === 'number' ? Number(e.target.value)
                    : e.target.value
        }))
    }
    useEffect(() => {
        if (values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age}`;
        }

    }, [values.username, values.age])


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='username'>Username:</label><br />
                        <input type='text' id='username' name='username' value={values.username} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label><br />
                        <input type='text' id='password' name='password' value={values.password} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label><br />
                        <input type='number' id='age' name='age' value={values.age} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='gender'>Gender:</label>
                        <select name='gender' value={values.gender} onChange={changeHandler}>
                            <option name='male' value="male">Male</option>
                            <option name='female' value="female">Female</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor='userType'>Individual:</label>
                        <input type='radio' id='individual' name='userType' value='individual' checked={values.userType === 'individual'} onChange={changeHandler} /><br />
                        <label htmlFor='corporate'>Corporate:</label>
                        <input type='radio' id='corporate' name='userType' value='corporate' checked={values.userType === 'corporate'} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='confirmTerms'>Terms confirm:</label>
                        <input type='checkbox' id='confirmTerms' name='confirmTerms' checked={values.confirmTerms} onChange={changeHandler} />
                    </div>

                    <input type='submit' value='Register' disabled={!values.confirmTerms} />
                    <div>
                        <label htmlFor='fullname'>Name and ages:</label>
                        <input type='text' id='fullname' name='fullname' ref={infoRef} />
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
