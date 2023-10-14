const baseUrl = 'http://localhost:3005/api/users';

export const getUsers = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result.users;
}

export const getUser = async (userId) => {
    const response = await fetch(baseUrl + `/${userId}`);
    const result = await response.json();
    return result.user;
}

export const createUser = async (userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const result = await response.json();
    return result.user;
}