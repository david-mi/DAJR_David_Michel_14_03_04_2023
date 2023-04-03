import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import SelectMenu from "../../components/SelectMenu/SelectMenu"
import { states, departments } from "./data"

const Home = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>HRnet</h1>
      </div>
      <div className={styles.container}>
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className={styles.address}>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <SelectMenu id="state" name="state" data={states} />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <SelectMenu name="department" id="department" data={departments} />
        </form>

        <button>Save</button>
      </div>
      <div id="confirmation" className={styles.modale}>Employee Created!</div>
    </>
  )
}

export default Home