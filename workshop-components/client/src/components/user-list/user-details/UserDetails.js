import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faX } from '@fortawesome/free-solid-svg-icons';

export const UserDetails = (props) => {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.onClose} />
            <div className="modal">
                <div className="detail-container">
                    <header className="headers">
                        <h2> User Detail</h2>
                        <button className="btn close" onClick={props.onClose}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </header>
                    <div className="content">
                        <div className="image-container">
                            <img src={props.user.imageUrl} alt={`profile`} />
                        </div>
                        <div className="user-details">
                            <p>
                                User Id: <strong>{props.user._id}</strong>
                            </p>
                            <p>
                                Full Name: <strong>{props.user.firstName} {props.user.lastName}</strong>
                            </p>
                            <p>
                                Email: <strong>{props.user.email}</strong>
                            </p>
                            <p>
                                Phone Number: <strong>{props.user.phoneNumber}</strong>
                            </p>
                            <p>
                                Address: <strong>{props.user.address.country}, {props.user.address.city}, {props.user.address.street} {props.user.address.streetNumber}</strong>
                            </p>

                            <p>
                                Created on: <strong>{props.user.createdAt}</strong>
                            </p>
                            <p>
                                Modified on: <strong>{props.user.updatedAt}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}