import React, { useEffect, useState } from 'react'
import Spinner from './components/Spinner/Spinner'
import Error from './components/Error'
import Form from './components/Form'
import Song from './components/Song'
import Info from './components/Info'
import fetchSongData from './utils/fetchSongData'

function App() {
  //State de busqueda

  const [info, setInfo] = useState({})

  //State del resultado

  const [lyrics, setLyrics] = useState('')

  //State de la informacion de la banda

  const [descriptions, setDescriptions] = useState([])

  //State de error

  const [error, setError] = useState(false)

  //State de cargando

  const [loading, setLoading] = useState(false)

  //Extrayendo los valores

  const { artist, song } = info

  useEffect(() => {
    if (Object.keys(info).length === 0) return
    setLoading(true)

    fetchSongData({ artist, song })
      .then(([{ data: lyricsData }, { data: descriptionData }]) => {
        lyricsData.lyrics ? setLyrics(lyricsData.lyrics) : setLyrics('')
        descriptionData.artists ? setDescriptions(descriptionData.artists[0]) : setDescriptions([])
        setError(false)
      })
      .finally(() => {
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        console.error(error.message)
      })
  }, [info, artist, song])

  return (
    <>
      <Form setInfo={setInfo} />
      <div className={`container ${!loading && 'mt-5'}`} style={loading ? { marginTop: '8rem' } : {}}>
        {error && <Error message="We couldn't find your song" />}
        {!loading && (
          <div className="row">
            {lyrics !== '' && (
              <div className="col-12 col-md-6">
                <Song lyrics={lyrics} />
              </div>
            )}
            {descriptions.length !== 0 && (
              <div className="col-12 col-md-6">
                <Info descriptions={descriptions} />
              </div>
            )}
          </div>
        )}
        {loading && <Spinner />}
        {!error && !loading && lyrics === '' && (
          <div className="placeholder_container">
            <img src="/home.svg" alt="home placeholder" className="placeholder" />
          </div>
        )}
      </div>
    </>
  )
}

export default App
