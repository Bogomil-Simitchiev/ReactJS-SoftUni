import { useState } from "react";

function Counter(props) {
    let [count, setCount] = useState(0);
    let text = 'Counter'

    const increaseHandler = (event) => {
        setCount(count => count + 1);
    }

    const decreaseHandler = (event) => {
        setCount(count => count - 1);
    }

    if (count <= 10) {
        text = ('Counter');
    }
    else if (count <= 20) {
        text = ('Medium counter');
    }
    else if (count <= 30) {
        text = ('Giga counter');
    }


    return (
        <div>
            <h3>Counter: {count}</h3>
            <h3>{text}</h3>
            <button onClick={increaseHandler}>++</button>
            <button onClick={decreaseHandler}>--</button>
        </div>
    );
}

export default Counter;