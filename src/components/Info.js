import React from 'react'

const Info = ({ artistData }) => {
  //Extrayendo valores

  const { artist, thumbnail, genre, biography } = artistData

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">{artist}</div>
      <div className="card-body">
        <img src={thumbnail} alt="Band Logo" />
        <p className="card-text">{genre}</p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text">{biography}</p>
      </div>
    </div>
  )
}

export default Info
