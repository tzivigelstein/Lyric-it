import React from 'react'

const Song = ({ lyrics }) => {
  return (
    <>
      <h2>Lyrics</h2>
      <p className="letra">{lyrics}</p>
    </>
  )
}

export default Song
