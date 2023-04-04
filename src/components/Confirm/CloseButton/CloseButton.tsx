import CloseIcon from "../../svg/CloseIcon/CloseIcon"
import closeButtonPropTypes from "./propTypes"
import styles from "./closeButton.module.css"

interface Props {
  /** handler to close modale */
  closeModale: () => any
  /** handler to set an active class to modale, for style purpose */
  setActive: (isActive: boolean) => any
}

const CloseButton = ({ closeModale, setActive }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={closeModale}
      onMouseEnter={setActive(true)}
      onMouseLeave={setActive(false)}
    >
      <CloseIcon />
    </button>
  )
}

CloseButton.propTypes = closeButtonPropTypes

export default CloseButton