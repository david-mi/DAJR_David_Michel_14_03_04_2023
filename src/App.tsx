import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import EmployeesContext from "./context/EmployeesContext"

const App = () => {
  return (
    <BrowserRouter>
      <EmployeesContext>
        <Routes />
      </EmployeesContext>
    </BrowserRouter>
  )
}

export default App
