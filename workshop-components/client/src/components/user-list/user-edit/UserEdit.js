import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faCity, faEnvelope, faHome, faImage, faMapMarkedAlt, faPhone, faStreetView, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { updateUser } from '../../../services/userService';

export const UserEdit = (props) => {
    const clickUpdateUser = (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            ...address
        } = Object.fromEntries(formData);

        const existingUser = {
            firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            address
        }

        const updatedUsers = props.users.map((user) =>
            user._id === userId ? { ...existingUser, _id: userId, createdAt: user.createdAt, updatedAt: user.updatedAt } : user
        )

        updateUser(existingUser, userId)
            .then(user => {
                props.updateUsers(updatedUsers);
                props.onClose();
            })
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.onClose} />
            <div className="modal">
                <div className="duser-container">
                    <header className="headers">
                        <h2>Edit User</h2>
                        <button className="btn close" onClick={props.onClose}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </header>
                    <form className="form" onSubmit={(e) => clickUpdateUser(e, props.user._id)}>
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
                                        defaultValue={props.user.firstName}
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
                                        defaultValue={props.user.lastName}
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
                                        defaultValue={props.user.email}
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
                                        defaultValue={props.user.phoneNumber}
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
                                    defaultValue={props.user.imageUrl}
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
                                        defaultValue={props.user.address.country}
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
                                        defaultValue={props.user.address.city}
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
                                        defaultValue={props.user.address.street}
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
                                        defaultValue={props.user.address.streetNumber}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <div className="buttons">
                                <button id='saveBtn' className="btn" type="submit">Edit</button>
                                <button id='cancelBtn' className="btn" onClick={props.onClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}