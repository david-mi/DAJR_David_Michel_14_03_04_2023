import titlePropTypes from "./propTypes"
import styles from "./title.module.css"

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
  )
}

Title.propTypes = titlePropTypes

export default Title