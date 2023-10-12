import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserItem } from './user-item/UserItem';
import { UserDetails } from './user-details/UserDetails';

import { getUser } from '../../services/userService';
import { useState } from 'react';


export const UserList = (props) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const clickDetailsHandler = (userId) => {
        getUser(userId)
            .then(user => setSelectedUser(user))
    }
    const clickCloseHandler = () => {
        setSelectedUser(null);
    }

    return (

        <div className="table-wrapper">

            {selectedUser && <UserDetails user={selectedUser} onClose={clickCloseHandler} />}
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
                    {props.users.map(user => <tr key={user._id}><UserItem {...user} clickDetails={clickDetailsHandler} /></tr>)}
                </tbody>
            </table>
        </div>
    )
}