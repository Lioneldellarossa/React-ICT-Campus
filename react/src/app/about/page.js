import styles from "./page.module.css"
const message = "I am a String"

const somefunktion = () => {
    return "i am also a string "
}

const aDiv = <div> Hello, O am a div in JSX</div>

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <h1>About page!</h1>

            <div className={styles.container}>
                <h2>JSX</h2>

                <div className={styles.content}>
                    <p>
                        It is called JSX, and it is a syntax extension to JavaScript.
                        We recommend using it with React to describe what the UI should look like.
                        JSX may remind you of a template language,
                        but it comes with the full power of JavaScript.
                    </p>
                    <div>{5 + 5}</div>
                    <div>{message}</div>
                    <div>{somefunktion()}</div>
                    {aDiv}

                    <img src=" https://placehold.co/150" alt="placeholder"/>

                    <br />

                    <p className="warning">
                        class wird zu className
                    </p>

                </div>
            </div>
        </div>
    )
}
