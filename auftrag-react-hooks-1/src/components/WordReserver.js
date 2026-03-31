import { useState } from "react";

export default function WordReserver({word}) {

    const [wordforReverse, setWord] = useState(word);

    const reverse = () => {
        setWord(word.split("").reverse().join(""))
    }
    

    return (
        <div >
            <button onClick={reverse}>Reverse</button>
            <p>{wordforReverse}</p>
        </div>
    );
}