import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ descriptions }) => {
  //Extrayendo valores

  const { strArtist, strArtistThumb, strGenre, strBiographyES, strLastFMChart, strTwitter, strFacebook } = descriptions

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">{strArtist}</div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Band Logo" />
        <p className="card-text">{strGenre}</p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

Info.propTypes = {
  descriptions: PropTypes.object.isRequired
}
export default Info
