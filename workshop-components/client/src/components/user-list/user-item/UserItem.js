import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserItem = (props) => {
    return (
        <tr>

            <td>
                <img src={props.imageUrl} alt={`${props.firstName}'s profile`} className="image" />
            </td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.createdAt}</td>

            <td className="actions">
                <button className="btn edit-btn">
                    <FontAwesomeIcon icon={faEdit} />
                </button>

                <button className="btn delete-btn">
                    <FontAwesomeIcon icon={faTrash} />
                </button>


                <button className="btn info-btn">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </button>
            </td>

        </tr>
    )
}