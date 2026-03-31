import { useState } from "react";

export default function ShoppingList({titel}) {

    const [liste, setListe] = useState([])

    const [input, setInput] = useState("")

    const [message, setMessage] = useState("Pech, muss was eingeben")

    const add = () => {
        if(input === "") {
            setMessage("Musst was eingeben, du trottel")
            return
        }
        const elemnt = {
            id: liste.length + 1, name: input
        }
        console.log(elemnt)
        setListe([elemnt, ...liste])
        console.log(liste)
        setInput("")
        setMessage("")
    }

    const changeInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <div >
            <h1>{titel}</h1>
            <input  value={input} onChange={changeInput} placeholder="Gib hier vieeeeeeel Text ein"></input>
            <button onClick={add}>Add</button>
            <ul>
                <p>{message}</p>
                {liste.map((liste)=>(
                    <li key={liste.id}> 
                        {liste.name}
                    </li>
                ))}
                
            </ul> 
           
        </div>
    );
}