import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faCity, faEnvelope, faHome, faImage, faMapMarkedAlt, faPhone, faStreetView, faUser, faX } from '@fortawesome/free-solid-svg-icons';

export const UserCreate = (props) => {
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
                    <form className="form" onSubmit={props.clickAddUser}>
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
                                    />
                                </div>
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
                                    />
                                </div>
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
                                    />
                                </div>
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
                                    />
                                </div>
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
                                    />
                                </div>
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
                                    />
                                </div>
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
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <div className="buttons">
                                <button id='saveBtn' className="btn" type='submit'>Save</button>
                                <button id='cancelBtn' className="btn" onClick={props.onClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}