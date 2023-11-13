import { Link, useLocation } from "react-router-dom"
import headerPropTypes from "./propTypes"
import styles from "./header.module.css"
import ArrowIcon from "../svg/ArrowIcon/ArrowIcon"

interface Props {
  logo: string
}

const Header = ({ logo }: Props) => {
  const { pathname } = useLocation()

  const navOptions = {
    "/employees": {
      navTitle: "Home",
      navLink: "/",
      linkClassName: styles.homeLink,
      logoClassName: styles.rotateRight,
    },
    "/": {
      navTitle: "Employees",
      navLink: "/employees",
      linkClassName: styles.employeesLink,
      logoClassName: styles.rotateLeft,
    },
  }

  const { navTitle, navLink, linkClassName, logoClassName } = navOptions[pathname as "/employees" | "/"]

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          width={300}
          height={276}
          src={logo}
          className={logoClassName}
          alt="HRnet"
        />
      </Link>
      <nav className={styles.nav}>
        <Link to={navLink} className={linkClassName}>
          <ArrowIcon />
          <span>{navTitle}</span>
        </Link>
      </nav>
    </header>
  )
}

Header.propTypes = headerPropTypes

export default Header