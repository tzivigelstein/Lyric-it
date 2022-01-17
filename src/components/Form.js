import React, { useState } from 'react'
import Error from './Error'

const Form = ({ setInfo }) => {
  const [data, setData] = useState({
    artist: '',
    song: '',
  })

  const [error, setError] = useState(false)

  const { artist, song } = data

  //Funcion para leer el contenido de los input

  const actualizarState = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  //Handle Submit

  const handleSubmit = e => {
    e.preventDefault()

    if (artist.trim() === '' || song.trim() === '') {
      setError(true)
      return
    }

    setError(false)
    setInfo(data)
  }

  return (
    <div className="bg-info">
      {error ? <Error message="Complete all fields" /> : null}
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-4 pb-2" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center">Lyrics finder</legend>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Artist or Band</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Example: The Beatles"
                      onChange={actualizarState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Example: Hey Jude"
                      onChange={actualizarState}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
