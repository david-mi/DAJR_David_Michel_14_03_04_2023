import { useContext } from "react"
import { EmployeesContext } from "../../context/EmployeesContext"
import type { Employee } from "../../context/EmployeesContext"
import Title from "../../components/Title/Title"
import { Table } from "david-mi-react-table"
import "david-mi-react-table/style.css"
import { columns } from "../../data/"

const Employees = () => {
  const { employees, setEmployees } = useContext(EmployeesContext)

  return (
    <main id="employee-div" className="container">
      <Title title="Current Employees" />
      <Table<keyof Employee>
        columns={columns}
        rows={employees}
      />
    </main>
  )
}

export default Employees