
import { useState } from "react";

export default function Counter() {
    const [count, setCounter] = useState(0);
    
    const plus = () => {
        setCounter(count + 1)
    }

    const minus = () => {
        setCounter(count - 1)
    }

    return (
        <div >
            
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <p>{count}</p>
        </div>
  );
}