import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";
import { generatedEmployees } from "../__mocks__/employees";

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