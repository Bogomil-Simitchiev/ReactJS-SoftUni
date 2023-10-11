import { faEdit, faTrash, faInfoCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserList = () => {
    return (
        <div className="table-wrapper">

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First Name <br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Last Name<br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Email<br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Phone<br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Created<br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Actions<br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>
                            <img src="data:image/jpeg;base64,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" alt="just" className="image" />


                        </td>
                        <td>Peter</td>
                        <td>Petrov</td>
                        <td>peter@abv.bg</td>
                        <td>0812345678</td>
                        <td>June</td>

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
                </tbody>
            </table>
        </div>
    )
}