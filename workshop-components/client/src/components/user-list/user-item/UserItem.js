import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserItem = (props) => {
    return (
        <>
            <td>
                <img src={props.imageUrl} alt={`${props.firstName}'s profile`} className="image" />
            </td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.createdAt}</td>

            <td className="actions">
                <button className="btn edit-btn" onClick={() => props.clickEdit(props._id)} >
                    <FontAwesomeIcon icon={faEdit} />
                </button>

                <button className="btn delete-btn" onClick={() => props.clickDelete(props._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>

                <button className="btn info-btn" onClick={() => props.clickDetails(props._id)}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </button>
            </td>
        </>
    )
}