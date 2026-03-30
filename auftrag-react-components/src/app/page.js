import styles from "./page.module.css"
import Button from "@/components/Button"

export default function Home(){
  return (
    <div>
      <div className={styles.home}>
        <Button text="default"/>
        <Button text="success"/>
        <Button text="danger"/>
        <Button text="warning"/>
        <Button text="info"/>
      </div>
    </div>
  )
}