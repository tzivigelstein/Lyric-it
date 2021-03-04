import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Song = ({ answer }) => {
  if (answer.length === 0) return null
  return (
    <Fragment>
      <h2>Lyrics</h2>
      <p className="letra">{answer}</p>
    </Fragment>
  )
}

Song.propTypes = {
  answer: PropTypes.string.isRequired,
}
export default Song
