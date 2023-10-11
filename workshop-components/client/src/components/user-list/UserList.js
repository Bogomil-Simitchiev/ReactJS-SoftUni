import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserItem } from './user-item/UserItem';


export const UserList = (props) => {
    return (
        <div className="table-wrapper">

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First Name

                        </th>

                        <th>
                            Last Name

                        </th>

                        <th>
                            Email

                        </th>

                        <th>
                            Phone

                        </th>

                        <th>
                            Created
                            <FontAwesomeIcon icon={faArrowDown} />
                        </th>

                        <th>
                            Actions
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => <UserItem key={user._id} {...user} />)}
                </tbody>
            </table>
        </div>
    )
}