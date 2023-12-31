import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faX } from "@fortawesome/free-solid-svg-icons"
import { deleteUser } from '../../../services/userService';

export const UserDelete = (props) => {

    const clickDeleteUser = (userId) => {
        const updatedUsers = props.users.filter(user => user._id !== userId);

        deleteUser(userId)
            .then(userId => {
                props.updateUsers(updatedUsers);
                props.onClose();
            })
    }
    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.onClose}></div>
            <div className="modal">
                <div className="confirm-container">
                    <header className="headers">
                        <h2>Are you sure you want to delete {props.user.firstName}'s account?</h2>
                        <button className="btn close" onClick={props.onClose}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </header>
                    <div className="actions">
                        <div className="form-actions">
                            <br />

                            <button id='deleteBtn' className="btn" onClick={() => clickDeleteUser(props.user._id)}>Delete</button>
                            <br />
                            <button id='cancelBtn' className="btn" onClick={props.onClose}>Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}