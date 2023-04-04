import PropTypes from "prop-types"

const selectPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }).isRequired).isRequired
}

export default selectPropTypes