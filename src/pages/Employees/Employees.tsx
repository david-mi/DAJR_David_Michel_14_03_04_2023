import { useContext } from "react"
import { EmployeesContext } from "../../context/EmployeesContext"
import Title from "../../components/Title/Title"

const Employees = () => {
  const { employees, setEmployees } = useContext(EmployeesContext)

  return (
    <main id="employee-div" className="container">
      <Title title="Current Employees" />
      <table id="employee-table" className="display"></table>
      <div style={{ fontSize: "2rem" }}>
        {JSON.stringify(employees, null, 2)}
      </div>
    </main>
  )
}

export default Employees