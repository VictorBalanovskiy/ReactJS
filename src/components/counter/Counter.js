import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + 1);

    return (
        <div>
            <span>{counter}</span>
            <button onClick={handleClick}>Click!</button>
        </div>
    );
}