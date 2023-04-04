import { useRef, useState } from "react"
import styles from "./confirm.module.css"
import CloseButton from "./CloseButton/CloseButton"

interface Props {
  message: string
  closeModale: () => any
}

/** Confirmation modale */

const Confirmation = ({ message, closeModale }: Props) => {
  let timeoutId: number | null = null
  const timeoutDelay = 500

  const [closeClass, setcloseClass] = useState("")
  const [activeClass, setActiveClass] = useState("")
  const modaleRef = useRef<HTMLDivElement>(null!)
  const backgroundRef = useRef<HTMLDivElement>(null!)

  /**
   * - Set closing animation className
   * - Closes the modale after a certain delay {@link timeoutDelay}
   */

  function handleCloseModale() {
    if (timeoutId !== null) return

    setcloseClass(styles.close)

    timeoutId = setTimeout(() => {
      closeModale()
      timeoutId = null
    }, timeoutDelay)
  }

  /** handler to set or remove an active class to modale, for style purpose */

  function setActive(isActive: boolean) {
    return function () {
      const className = isActive
        ? styles.active
        : ""

      setActiveClass(className)
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.background} ${closeClass}`}
        onClick={handleCloseModale}
        ref={backgroundRef}
      ></div>
      <div className={`${styles.modale} ${closeClass} ${activeClass}`} ref={modaleRef}>
        <p>{message}</p>
        <CloseButton setActive={setActive} closeModale={handleCloseModale} />
      </div>
    </div>
  )
}

export default Confirmation
