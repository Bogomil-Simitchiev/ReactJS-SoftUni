import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for FontAwesome 6
import { faX } from '@fortawesome/free-solid-svg-icons';


export const UserEdit = (props) => {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={props.onClose} />
            <div className="modal">
                <div className="duser-container">
                    <header className="headers">
                        <h2>Edit User/Add User</h2>
                        <button className="btn close" onClick={props.onClose}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </header>
                    <form onSubmit={() => console.log('action')} className="form">

                    </form>
                </div>
            </div>
        </div>
    )
}