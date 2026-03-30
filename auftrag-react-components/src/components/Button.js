import style from "./Button.module.css"

export default function Button(props) {
    return (
        <div className={style.buttons}>
            <button className={style[props.text]}>{props.text}</button>
        </div>
    )
}
