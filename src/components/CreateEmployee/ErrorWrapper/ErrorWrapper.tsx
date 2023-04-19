import styles from "./errorWrapper.module.css"

interface Props {
  children: JSX.Element,
  message?: string,
  hasError?: boolean
}

const ErrorWrapper = ({ children, message, hasError }: Props) => {
  const wrapperClassName = `${styles.error} ${hasError ? styles.visible : ""}`

  return (
    <div className={wrapperClassName}>
      <p>{message}</p>
      {children}
    </div>
  )
}

export default ErrorWrapper