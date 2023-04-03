import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

export interface Employee {
  firstName: string
  lastName: string
  dateOfBirth: string
  startDate: string
  street: string
  city: string
  state: string
  zipCode: string
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
  const [employees, setEmployees] = useState<Employee[]>([])

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider