import { useState } from "react"
import { Link } from "react-router-dom"
import { states, departments } from "./data"
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee"
import Title from "../../components/Title/Title"
import Confirmation from "../../components/Confirm/Confirm"
import styles from "./Home.module.css"

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
      <Link to="/employees">View Current Employees</Link>
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