

export default function WordServer({word}){
    let buchstaben = word.split("").reverse().join("");
    return(
    <div>
        <p>{buchstaben}</p>
    </div>
    )
}