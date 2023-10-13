import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserItem } from './user-item/UserItem';
import { UserDetails } from './user-details/UserDetails';

import { getUser } from '../../services/userService';
import { useState } from 'react';
import { UserEdit } from './user-edit/UserEdit';

const userActions = {
    Details: 'details',
    Edit: 'edit',
    Delete: 'delete'
}

export const UserList = (props) => {
    const [selectedUser, setSelectedUser] = useState({ user: null, action: null });

    const clickCloseHandler = () => {
        setSelectedUser({ user: null, action: null });
    }

    const clickDetailsHandler = (userId) => {
        getUser(userId)
            .then(user => setSelectedUser({ user, action: userActions.Details }))
    }

    const clickEditHandler = (userId) => {
        getUser(userId)
            .then(user => setSelectedUser({ user, action: userActions.Edit }))
    }

    const clickDeleteHandler = (userId) => {
        getUser(userId)
            .then(user => setSelectedUser({ user, action: userActions.Delete }))
    }

    return (

        <div className="table-wrapper">

            {selectedUser.action === userActions.Details 
                && 
                <UserDetails user={selectedUser.user} 
                onClose={clickCloseHandler} 
                />
            }
            {selectedUser.action === userActions.Edit 
                && 
                <UserEdit user={selectedUser.user} 
                onClose={clickCloseHandler} 
                />
            }

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
                    {props.users.map(user => 
                        <tr key={user._id}>
                        <UserItem {...user} 
                        clickDetails={clickDetailsHandler} 
                        clickEdit={clickEditHandler}
                        />
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}