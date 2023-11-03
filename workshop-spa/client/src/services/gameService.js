const baseUrl = 'http://localhost:3030';

export const getAllGames = () => {
    return fetch(`${baseUrl}/data/games`)
        .then(res => res.json())
}

export const createGame = (gameData, accessToken) => {
    return fetch(`${baseUrl}/data/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(gameData)
    }).then(res => res.json())

}

export const editCurrentGame = (gameData, gameId, accessToken) => {
    return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(gameData)
    }).then(res => res.json())

}

export const deleteCurrentGame = (gameId, accessToken) => {
    return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        },
    }).then(res => res.json())
}

export const addCommentService = (gameId, comment, accessToken) => {
    return fetch(`${baseUrl}/data/comments`, {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ gameId, comment })
    }).then(res => res.json())
}

export const getCommentsForCurrentGame = (gameId) => {
    return fetch(`${baseUrl}/data/comments?where=gameId%3D%22${gameId}%22`).then(res => res.json())
}