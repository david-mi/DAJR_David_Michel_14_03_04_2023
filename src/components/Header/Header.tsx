import { Link } from "react-router-dom"
import headerPropTypes from "./propTypes"
import styles from "./header.module.css"
import ArrowIcon from "../svg/ArrowIcon/ArrowIcon"

interface Props {
  logo: string
}

const Header = ({ logo }: Props) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="HRnet" />
      </Link>
      <nav className={styles.nav}>
        <Link to="/employees">
          <ArrowIcon />
          <span>Employees</span>
        </Link>
      </nav>
    </header>
  )
}

Header.propTypes = headerPropTypes

export default Header