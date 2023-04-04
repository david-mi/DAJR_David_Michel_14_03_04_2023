import { Link } from "react-router-dom"
import Title from "../../components/Title/Title"

const Employees = () => {
  return (
    <main id="employee-div" className="container">
      <Title title="Current Employees" />
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </main>
  )
}

export default Employees