import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import { states, departments } from "./data"
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee"
import Title from "../../components/Title/Title"

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Title title="HRnet" />
        <Link to="/employees">View Current Employees</Link>
        <CreateEmployee states={states} departments={departments} />
      </div>
      <div id="confirmation" className={styles.modale}>Employee Created!</div>
    </>
  )
}

export default Home