import SelectMenu from "./Select/Select"
import styles from "./createEmployee.module.css"
import type { SelectData } from "../../pages/Home/data/types"

interface Props {
  states: SelectData
  departments: SelectData
}

const CreateEmployee = ({ states, departments }: Props) => {
  return (
    <form id="create-employee" className={styles.form}>
      <h2 className={styles.title}>Create Employee</h2>

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

      <button>Save</button>
    </form>
  )
}

export default CreateEmployee