import React from 'react'
import PropTypes from 'prop-types'

const Song = ({ lyrics }) => {
  return (
    <>
      <h2>Lyrics</h2>
      <p className="letra">{lyrics}</p>
    </>
  )
}

Song.propTypes = {
  lyrics: PropTypes.string.isRequired
}

export default Song
