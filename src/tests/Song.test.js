import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Song from '../components/Song'

const lyrics = 'I am the very model of a modern major general'

test('Test for Song to render succesfully', () => {
  const component = render(<Song lyrics={lyrics} />)
  expect(component).toBeDefined()

  expect(component.container).toHaveTextContent('Lyrics')
  expect(component.container).toHaveTextContent(lyrics)
})
