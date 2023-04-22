import { useContext } from "react"
import { EmployeesContext } from "../../context/EmployeesContext"
import type { Employee } from "../../context/EmployeesContext"
import Title from "../../components/Title/Title"
import { Table } from "david-mi-react-table"
import { columns } from "../../data/"
import styles from "./employees.module.css"

const Employees = () => {
  const { employees, setEmployees } = useContext(EmployeesContext)

  return (
    <main id="employee-div" className="container">
      <Title title="Current Employees" />
      <Table<keyof Employee>
        columns={columns}
        rows={employees}
        classNames={{
          container: styles.container,
          informations: styles.informations,
          navigation: styles.navigation,
          search: styles.search,
          select: styles.select,
          tableContainer: styles.tableContainer,
          table: styles.table
        }}
      />
    </main>
  )
}

export default Employees