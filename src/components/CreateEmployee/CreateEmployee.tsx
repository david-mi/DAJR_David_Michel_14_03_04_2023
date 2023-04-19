import React, { useRef, useContext, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import SelectMenu from "./Select/Select"
import type { SelectData } from "../../data/types"
import type { Employee } from "../../context/EmployeesContext"
import { EmployeesContext } from "../../context/EmployeesContext"
import createEmployeePropTypes from "./propTypes"
import styles from "./createEmployee.module.css"
import { handleForm } from "./validate"
import ErrorWrapper from "./ErrorWrapper/ErrorWrapper"

type formError = Partial<Record<keyof Employee, boolean>>

interface Props {
  states: SelectData
  departments: SelectData
  /** update state to hide or display confirmation modale */
  setShowConfirmation: Dispatch<SetStateAction<boolean>>
}

const CreateEmployee = ({ states, departments, setShowConfirmation }: Props) => {
  const { setEmployees } = useContext(EmployeesContext)
  const formRef = useRef<HTMLFormElement>(null)

  const [error, setError] = useState<formError>({})

  /**
   * Form submission
   * put new employee in employees state
   */

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    try {
      const formBody: Employee = handleForm(form.elements)
      setEmployees((previous) => [formBody, ...previous])
      setShowConfirmation(true)
    }
    catch (error) {
      console.log(error)
      setError(error as formError)
    }
  }

  /**
   * Helper function to get today's date as "YYYY-MM-DD"
   * to put as default value on date inputs
   */

  function setTodayDateInput(): string {
    const date = new Date()
    return date.toISOString().slice(0, 10)
  }

  function hideError() {
    if (Object.keys(error).length !== 0) {
      setError({})
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="create-employee"
      className={styles.form}
      ref={formRef}
      onChange={hideError}
      onFocus={hideError}
      noValidate
    >
      <h2 className={styles.title}>Create Employee</h2>

      <div className={styles.identity}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <ErrorWrapper message="2 chars minimum" hasError={error.firstName}>
            <input type="text" id="firstName" name="firstName" />
          </ErrorWrapper>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <ErrorWrapper message="2 chars minimum" hasError={error.lastName}>
            <input type="text" id="lastName" name="lastName" />
          </ErrorWrapper>
        </div>
      </div>

      <div className={styles.dates}>
        <div>
          <label htmlFor="birthDate">Date of Birth</label>
          <ErrorWrapper message="Select a valid date" hasError={error.birthDate}>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              defaultValue={setTodayDateInput()}
            />
          </ErrorWrapper>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <ErrorWrapper message="Select a valid date" hasError={error.startDate}>
            <input
              type="date"
              id="startDate"
              name="startDate"
              defaultValue={setTodayDateInput()}
            />
          </ErrorWrapper>
        </div>
      </div>

      <fieldset className={styles.address}>
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <ErrorWrapper message="Street format is invalid" hasError={error.street}>
          <input id="street" name="street" type="text" required />
        </ErrorWrapper>

        <label htmlFor="city">City</label>
        <ErrorWrapper message="City format is invalid" hasError={error.city}>
          <input id="city" name="city" type="text" required />
        </ErrorWrapper>

        <label htmlFor="state">State</label>
        <ErrorWrapper message="Select a state from the list" hasError={error.state}>
          <SelectMenu id="state" name="state" data={states} />
        </ErrorWrapper>

        <label htmlFor="zipCode">Zip Code</label>
        <ErrorWrapper message="Zip code should contain 5 numbers" hasError={error.zipCode}>
          <input id="zipCode" name="zipCode" type="number" required />
        </ErrorWrapper>
      </fieldset>

      <label htmlFor="department">Department</label>
      <ErrorWrapper message="Select a department from the list" hasError={error.department}>
        <SelectMenu name="department" id="department" data={departments} />
      </ErrorWrapper>

      <button>Save</button>
    </form>
  )
}

CreateEmployee.propTypes = createEmployeePropTypes

export default CreateEmployee