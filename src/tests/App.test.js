import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'

test('Test for App to render succesfully', () => {
  const component = render(<App />)
  expect(component).toBeDefined()
})
