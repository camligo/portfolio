import styles from "./Title.module.scss"

const Title = ({ children, textAlign = "center" }) => {
  const classes = `${styles.title} ${textAlign === "left" ? styles.left : styles.center}`;
  return (
    <h2 className={classes}>{children}</h2>
  )
}

export default Title
