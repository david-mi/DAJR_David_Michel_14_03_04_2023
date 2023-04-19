import { useState } from "react"
import { states, departments } from "../../data"
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee"
import Confirmation from "../../components/Confirm/Confirm"
import styles from "./Home.module.css"
import Title from "../../components/Title/Title"

const Home = () => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)

  /**
   * Close confirmation modale
   */

  function closeModale() {
    setShowConfirmation(false)
  }

  return (
    <main className={styles.container}>
      <Title title="HRnet" />
      <CreateEmployee
        states={states}
        departments={departments}
        setShowConfirmation={setShowConfirmation}
      />
      {showConfirmation && (
        <Confirmation message="Employee Created!" closeModale={closeModale} />
      )}
    </main>
  )
}

export default Home