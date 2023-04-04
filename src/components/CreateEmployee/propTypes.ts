import PropTypes from "prop-types"

const createEmployeePropTypes = {
  states: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  departments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setShowConfirmation: PropTypes.func.isRequired
}

export default createEmployeePropTypes