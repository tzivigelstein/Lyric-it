import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Error from '../components/Error'

const messageError = 'Something went wrong'

test('Test for Error to render succesfully', () => {
  const component = render(<Error message={messageError} />)
  expect(component).toBeDefined()

  expect(component.container).toHaveTextContent(messageError)
})
