import React from 'react'
import { render, fireEvent, screen } from '@utils/test'
import Footer from '../index'

test('show placeholder before data loaded', () => {
  // const testMessage = 'Test Message'
  // render(<Footer>{testMessage}</Footer>)
  // // query* functions will return the element or null if it cannot be found
  // // get* functions will return the element or throw an error if it cannot be found
  // expect(screen.queryByText(testMessage)).toBeNull()
  // // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  // fireEvent.click(screen.getByLabelText(/show/i))
  // // .toBeInTheDocument() is an assertion that comes from jest-dom
  // // otherwise you could use .toBeDefined()
  // expect(screen.getByText(testMessage)).toBeInTheDocument()
})
