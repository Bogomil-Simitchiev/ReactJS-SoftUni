import { useEffect } from "react";
import { useState } from "react"

export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <ul>
            {!characters.length && 'Loading...'}
            {characters.map(character =>
                <li key={character.name}>{character.name}</li>
            )}

        </ul>
    )

}