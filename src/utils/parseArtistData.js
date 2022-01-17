export default function (artistData) {
  const { strArtist, strArtistThumb, strGenre, strBiographyES } = artistData

  return {
    artist: strArtist,
    genre: strGenre,
    thumbnail: strArtistThumb,
    biography: strBiographyES
  }
}
