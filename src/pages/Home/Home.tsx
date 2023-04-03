import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import { states, departments } from "./data"
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee"

const Home = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>HRnet</h1>
      </div>
      <div className={styles.container}>
        <Link to="/employees">View Current Employees</Link>
        <CreateEmployee states={states} departments={departments} />
      </div>
      <div id="confirmation" className={styles.modale}>Employee Created!</div>
    </>
  )
}

export default Home