import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Info from '../components/Info'

const artistData = {
  artist: 'Queen',
  genre: 'Rock',
  thumbnail: 'https://www.theaudiodb.com/images/media/artist/thumb/xqpvqp1487602359.jpg',
  biography:
    'Queen are an English rock band formed in London in 1970. The band consists of Brian May (lead vocals, guitar, piano), Roger Taylor (bass guitar, backing vocals), John Deacon (drums), Brian Johnson (keyboards), and Brian May (guitar).'
}

test('Test for Info to render succesfully', () => {
  const component = render(<Info artistData={artistData} />)
  expect(component).toBeDefined()

  const bandLogo = component.getByAltText('Band Logo')

  expect(component.container).toHaveTextContent('Biography')
  expect(component.container).toHaveTextContent(artistData.artist)
  expect(component.container).toHaveTextContent(artistData.genre)
  expect(component.container).toHaveTextContent(artistData.biography)
  expect(bandLogo).toHaveAttribute('src', artistData.thumbnail)
})
