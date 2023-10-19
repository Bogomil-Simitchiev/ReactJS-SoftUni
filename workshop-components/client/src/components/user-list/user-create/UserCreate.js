import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faCity, faEnvelope, faHome, faImage, faMapMarkedAlt, faPhone, faStreetView, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const UserCreate = (props) => {
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    })

    const minLength = (e, limit) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < limit
        }))
    }
    const isPositive = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] < 0
        }))
    }

    const isValidForm = Object.values(errors).some(x => x);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const { country, city, street, streetNumber, ...userData } = values;
        userData.address = { country, city, street, streetNumber };
        props.clickAddUser(userData);

    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.onClose} />
            <div className="modal">
                <div className="duser-container">
                    <header className="headers">
                        <h2>Add New User</h2>
                        <button className="btn close" onClick={props.onClose}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </header>
                    <form className="form" onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="group">
                                <label htmlFor="firstName">Firstname:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                    </span>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={values.firstName}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}
                                    />

                                </div>
                                {errors.firstName &&
                                    <p className="form error">Firstname should be at least 3 characters long!</p>
                                }
                            </div>
                            <div className="group">
                                <label htmlFor="lastName">Lastname:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                    </span>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={values.lastName}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}
                                    />
                                </div>
                                {errors.lastName &&
                                    <p className="form error">Lastname should be at least 3 characters long!</p>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="group">
                                <label htmlFor="email">Email:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="phoneNumber">Phone number:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} className="icon" />
                                    </span>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        value={values.phoneNumber}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 6)}
                                    />
                                </div>
                                {errors.phoneNumber &&
                                    <p className="form error">Phone number should be at least 6 numbers!</p>
                                }
                            </div>
                        </div>
                        <div className="group">
                            <label htmlFor="imageUrl">Image URL:</label>
                            <div
                                className="control">
                                <span>
                                    <FontAwesomeIcon icon={faImage} className="icon" />
                                </span>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="group">
                                <label htmlFor="country">Country:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
                                    </span>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={values.country}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}
                                    />
                                </div>
                                {errors.country &&
                                    <p className="form error">Country should be at least 3 characters long!</p>
                                }
                            </div>
                            <div className="group">
                                <label htmlFor="city">City:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faCity} className="icon" />
                                    </span>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={values.city}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}

                                    />
                                </div>
                                {errors.city &&
                                    <p className="form error">City should be at least 3 characters long!</p>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="group">
                                <label htmlFor="street">Street:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faStreetView} className="icon" />
                                    </span>
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        value={values.street}
                                        onChange={changeHandler}
                                        onBlur={(e) => minLength(e, 3)}


                                    />
                                </div>
                                {errors.street &&
                                    <p className="form error">Street should be at least 3 characters long!</p>
                                }
                            </div>
                            <div className="group">
                                <label htmlFor="streetNumber">Street number:</label>
                                <div
                                    className="control">
                                    <span>
                                        <FontAwesomeIcon icon={faHome} className="icon" />
                                    </span>
                                    <input
                                        id="streetNumber"
                                        name="streetNumber"
                                        type="number"
                                        value={values.streetNumber}
                                        onChange={changeHandler}
                                        onBlur={(e) => isPositive(e)}
                                    />
                                </div>
                                {errors.streetNumber &&
                                    <p className="form error">Street number should be positive!</p>
                                }
                            </div>
                        </div>
                        <div className="actions">
                            <div className="buttons">
                                <button id='saveBtn' className="btn" type='submit' disabled={isValidForm}>Save</button>
                                <button id='cancelBtn' className="btn" onClick={props.onClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}