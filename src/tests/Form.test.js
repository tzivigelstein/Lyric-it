import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Form from '../components/Form'

test('Test for Form to render succesfully', () => {
  const component = render(<Form />)
  expect(component).toBeDefined()

  expect(component.container).toHaveTextContent('Lyrics finder')
  expect(component.container).toHaveTextContent('Artist or Band')
  expect(component.container).toHaveTextContent('Song')
  expect(component.container).toHaveTextContent('Search')
})
