// test-utils.js
import React from 'react'
import '@testing-library/jest-dom'
import { render as rtlRender, debug, prettyDOM } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

const customRender = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {},
) => {
  const AllTheProviders = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: AllTheProviders, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

const customDebug = (dom, maxLength = Infinity, options = { min: true }) => {
  console.log(prettyDOM(dom, maxLength, options))
}

// override render method
export { customRender as render }
export { customDebug as debug }
