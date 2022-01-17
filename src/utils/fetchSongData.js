import axios from 'axios'

const fetchSongData = async ({ artist, song }) => {
  const parsedArtist = artist.toLowerCase()
  const parsedSong = song.toLowerCase()

  const urlLyrics = `https://api.lyrics.ovh/v1/${parsedArtist}/${parsedSong}`
  const urlAudioDB = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${parsedArtist}`

  return await Promise.all([axios.get(urlLyrics), axios.get(urlAudioDB)])
}

export default fetchSongData
