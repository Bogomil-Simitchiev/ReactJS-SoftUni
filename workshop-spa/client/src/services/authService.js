const baseUrl = 'http://localhost:3030';

export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res => res.json())
}

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/users/logout`, {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken
        }
    })
}