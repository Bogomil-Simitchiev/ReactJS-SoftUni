const baseUrl = 'http://localhost:3030';

export const getAllGames = () => {
    return fetch(`${baseUrl}/data/games`)
        .then(res => res.json())
}

export const createGame = (gameData, accesToken) => {
    return fetch(`${baseUrl}/data/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accesToken
        },
        body: JSON.stringify(gameData)
    }).then(res => res.json())

}

export const editCurrentGame = (gameData, gameId, accesToken) => {
    return fetch(`${baseUrl}/data/games/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accesToken
        },
        body: JSON.stringify(gameData)
    }).then(res => res.json())

}