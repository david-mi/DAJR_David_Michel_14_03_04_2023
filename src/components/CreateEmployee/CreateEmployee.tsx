import { useRef, useContext } from "react"
import SelectMenu from "./Select/Select"
import styles from "./createEmployee.module.css"
import type { SelectData } from "../../pages/Home/data/types"
import type { Employee } from "../../context/EmployeesContext"
import { EmployeesContext } from "../../context/EmployeesContext"

interface Props {
  states: SelectData
  departments: SelectData
}

const CreateEmployee = ({ states, departments }: Props) => {
  const { setEmployees } = useContext(EmployeesContext)
  const formRef = useRef<HTMLFormElement>(null)

  /**
   * Form submission
   * put new employee in employees state
   */

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const form = formRef.current!
    const formData = new FormData(form)
    // @ts-ignore
    const formBody = Object.fromEntries(formData) as Employee

    setEmployees((previous) => [...previous, formBody])
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="create-employee"
      className={styles.form}
      ref={formRef}
    >
      <h2 className={styles.title}>Create Employee</h2>

      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" />

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" required />

      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" required />

      <fieldset className={styles.address}>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" name="street" type="text" required />

        <label htmlFor="city">City</label>
        <input id="city" name="city" type="text" required />

        <label htmlFor="state">State</label>
        <SelectMenu id="state" name="state" data={states} />

        <label htmlFor="zipCode">Zip Code</label>
        <input id="zipCode" name="zipCode" type="number" required />
      </fieldset>

      <label htmlFor="department">Department</label>
      <SelectMenu name="department" id="department" data={departments} />

      <button>Save</button>
    </form>
  )
}

export default CreateEmployee