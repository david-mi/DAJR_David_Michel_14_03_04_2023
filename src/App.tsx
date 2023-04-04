import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import EmployeesContext from "./context/EmployeesContext"
import Header from "./components/Header/Header"
import logo from "./assets/logo.png"

const App = () => {
  return (
    <BrowserRouter>
      <EmployeesContext>
        <Header logo={logo} />
        <Routes />
      </EmployeesContext>
    </BrowserRouter>
  )
}

export default App
