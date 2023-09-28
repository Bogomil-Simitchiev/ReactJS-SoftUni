import { useState } from "react";

function Clicker(props) {

    let [clicks, setClick] = useState(0);
    let [text, setText] = useState(clicks);
    let [color, changeColor] = useState('');

    function clickHandler(e) {
        setClick(clicks => clicks += 1)
        setText(`${clicks}`);
        if (clicks + 1 >= 7) {
            changeColor(color => color = 'setRedColor');
        }
    }

    return (
        <>
            <button onClick={clickHandler}>{clicks}</button>
            <p>The previous number was {text}</p>
            <button className={color}>Red</button>
        </>
    );
}

export default Clicker;