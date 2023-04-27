import type { Employee } from "../../context/EmployeesContext"
import { states, departments } from "../../data"

export function handleForm(elements: HTMLFormControlsCollection): Employee {
  const firstNameForm = (elements.namedItem("firstName") as HTMLInputElement).value
  const lastNameForm = (elements.namedItem("lastName") as HTMLInputElement).value
  const birthDateForm = (elements.namedItem("birthDate") as HTMLInputElement).value
  const startDateForm = (elements.namedItem("startDate") as HTMLInputElement).value
  const streetFrorm = (elements.namedItem("street") as HTMLInputElement).value
  const cityForm = (elements.namedItem("city") as HTMLInputElement).value
  const stateForm = (elements.namedItem("state") as HTMLInputElement).value
  const zipCodeForm = (elements.namedItem("zipCode") as HTMLInputElement).value
  const departmentForm = (elements.namedItem("department") as HTMLInputElement).value

  return {
    firstName: handleName(firstNameForm, "firstName"),
    lastName: handleName(lastNameForm, "lastName"),
    birthDate: handleDate(birthDateForm, "birthDate"),
    startDate: handleDate(startDateForm, "startDate"),
    street: handleStreet(streetFrorm),
    city: handleCity(cityForm),
    state: handleState(stateForm),
    zipCode: handleZipCode(zipCodeForm),
    department: handleDepartment(departmentForm),
  }
}

function handleName(name: string, property: "firstName" | "lastName"): string {
  const nameRegex = /^[a-zA-ZÀ-ö]{1}[a-zÀ-ö -]*[a-zA-ZÀ-ö]{1}$/
  if (nameRegex.test(name) === false) {
    throw { [property]: true }
  }

  return name
}

function handleDate(date: string, property: string): string {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (dateRegex.test(date) === false) {
    throw { [property]: true }
  }

  return date
}

function handleStreet(street: string): string {
  const streetRegex = /^[a-zÀ-ö\d]{1}[a-zÀ-ö\d -.]*[a-zA-ZÀ-ö]{1}$/i
  if (streetRegex.test(street) === false) {
    throw { street: true }
  }

  return street
}

function handleCity(city: string): string {
  const cityRegex = /^[a-zÀ-ö]{1}[a-zÀ-ö -.]*[a-zA-ZÀ-ö]{1}$/i
  if (cityRegex.test(city) === false) {
    throw { city: true }
  }

  return city
}

function handleState(state: string): string {
  const foundState = states.find((stateFromList) => {
    return stateFromList.value === state
  })

  if (foundState === undefined) {
    throw { state: true }
  }

  return state
}

function handleZipCode(zipCode: string): number {
  const zipCodeRegex = /^\d{5}$/
  if (zipCodeRegex.test(zipCode) === false) {
    throw { zipCode: true }
  }

  return parseInt(zipCode, 10)
}

function handleDepartment(department: string): string {
  const foundDepartment = departments.find((departmentFromList) => {
    return departmentFromList.name === department
  })

  if (foundDepartment === undefined) {
    throw { department: true }
  }

  return department
}

