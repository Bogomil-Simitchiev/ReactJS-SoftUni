import { useEffect, useState } from "react";
import styles from "./Book.module.css"

function Book(props) {
    let [changeColor, setColor] = useState(false);

    useEffect(() => {
        console.log('Only 1 time');
    }, [])

    useEffect(() => {
        console.log('Updating changeColor');
    }, [changeColor])

    function clickHandler(event) {
        setColor(oldColor => !oldColor);
    }

    let style = {}
    if (changeColor) {
        style.backgroundColor = 'blue';
    }

    return (
        <li style={style} className={styles['font-family-color']}>
            <h1>Title: {props.title}</h1>
            <p>Price: {props.price}</p>
            <p>Author: {props.author}</p>
            <button onClick={clickHandler}>Change color</button>
        </li>
    );
}

export default Book;