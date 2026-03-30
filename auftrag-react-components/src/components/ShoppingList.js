
export default function ShoppingList({items}, {titel}) {
    
    return(
        <div>
            <h1>{titel}</h1>
            <li key={items.name}>
                {items.name}
            </li>
        </div>
    )
}