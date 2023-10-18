import { UserItem } from './user-item/UserItem';
import { UserDetails } from './user-details/UserDetails';

import { createUser, getUser } from '../../services/userService';
import { useState } from 'react';
import { UserEdit } from './user-edit/UserEdit';
import { UserDelete } from './user-delete/UserDelete';
import { UserCreate } from './user-create/UserCreate';

const userActions = {
    Details: 'details',
    Edit: 'edit',
    Delete: 'delete',
    Add: 'add'
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

    const clickAddUser = (newUser) => {
        createUser(newUser)
            .then(user => {
                props.addNewUser(user);
                clickCloseHandler();
            })
    }

    return (
        <>
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
                        updateUsers={props.updateUsers}
                        users={props.users}
                    />
                }
                {selectedUser.action === userActions.Delete
                    &&
                    <UserDelete user={selectedUser.user}
                        onClose={clickCloseHandler}
                        updateUsers={props.updateUsers}
                        users={props.users}
                    />
                }
                {selectedUser.action === userActions.Add
                    &&
                    <UserCreate user={selectedUser.user}
                        onClose={clickCloseHandler}
                        clickAddUser={clickAddUser}
                    />
                }

                <table className="table">
                    {props.users.length === 0 && <p>No users added</p>}
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
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map(user => {
                            if (user) {
                                return <tr key={user._id}>
                                    <UserItem {...user}
                                        clickDetails={clickDetailsHandler}
                                        clickEdit={clickEditHandler}
                                        clickDelete={clickDeleteHandler}
                                    />
                                </tr>
                            }
                        })}
                    </tbody>
                </table>
            </div>
            <button className='btn-add' onClick={() => setSelectedUser({ user: null, action: userActions.Add })}>Add new user</button>

        </>
    )
}