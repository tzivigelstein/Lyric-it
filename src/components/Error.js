import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => {
  return <p className="alert alert-danger text-center p-2">{message}</p>
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
export default Error
