import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";
import generateEmployees from "employees-generator"

export interface Employee {
  firstName: string
  lastName: string
  birthDate: string
  startDate: string
  street: string
  city: string
  state: string
  zipCode: number
  department: string
}

interface Employees {
  employees: Employee[],
  setEmployees: Dispatch<SetStateAction<Employee[]>>
}

const generatedEmployees = generateEmployees<Employee>({ amount: 50 })

export const EmployeesContext = createContext<Employees>({
  employees: [],
  setEmployees: () => { }
})

interface Props {
  children: ReactNode
}

const EmployeesProvider = ({ children }: Props) => {
  const [employees, setEmployees] = useState<Employee[]>(generatedEmployees)

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider