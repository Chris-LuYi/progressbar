import React from 'react'
import { render, fireEvent, screen, debug } from '@utils/test'
import Footer from '../index'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

const getRandomArray = (maxArrayCount, item) => {
  const arryLength = getRandomArbitrary(1, maxArrayCount)
  const ary = []
  for (let i = 0; i < arryLength; i++) {
    ary.push(Math.floor(getRandomArbitrary(item.min, item.max)))
  }
  return ary
}

const randomConfig = () => {
  return {
    buttons: getRandomArray(10, { min: -100, max: 100 }),
    bars: getRandomArray(10, { min: 0, max: 100 }),
    limit: getRandomArbitrary(1, 400),
  }
}

test('no error with default props', () => {
  render(<Footer />)
  expect(screen.getByTestId('select')).toBeTruthy()
})

test('dropdown change logic check', async () => {
  const cfg = randomConfig()
  render(<Footer config={cfg} />)
  const select = screen.getByTestId('select')
  expect(select).toBeTruthy()
  // debug(select)
  expect(
    screen.queryAllByText(/#progres/).length === cfg.bars.length,
  ).toBeTruthy() //check option number match

  const selectIndex = cfg.bars.indexOf(
    cfg.bars[Math.floor(Math.random() * cfg.bars.length)],
  )
  await fireEvent.change(select, {
    target: {
      value: selectIndex,
    },
  })

  expect(select.value).toEqual(`${selectIndex}`)
})

test('button click check', async () => {
  const cfg = randomConfig()
  const { container, queryAllByRole } = render(<Footer config={cfg} />)
  const buttons = await queryAllByRole('button')
  buttons.forEach((element) => {
    debug(element)
  })

  // const select = screen.getByTestId('select')
  // expect(select).toBeTruthy()
  // // debug(select)
  // expect(
  //   screen.queryAllByText(/#progres/).length === cfg.buttons.length,
  // ).toBeTruthy() //check option number match
  // const selectIndex = cfg.buttons.indexOf(
  //   cfg.buttons[Math.floor(Math.random() * cfg.buttons.length)],
  // )
  // await fireEvent.change(select, {
  //   target: {
  //     value: selectIndex,
  //   },
  // })
  // expect(select.value).toEqual(`${selectIndex}`)
})

// test('test input value', async () => {
//   const cfg = randomConfig()
//   const { getByLabelText, getByText, container } = render(
//     <Footer config={cfg} />,
//   )
//   const input = getByLabelText('Email')
//   debug(input)

//   await fireEvent.change(input, {
//     target: {
//       value: '132',
//     },
//   })
//   expect(input.value).toBe('132')
// })

// console.log(screen.getByTestId('select'))
// // query* functions will return the element or null if it cannot be found
// // get* functions will return the element or throw an error if it cannot be found
// expect(screen.getByTestId('select')).toBeTruthy()

// // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
// fireEvent.click(screen.getByLabelText(/show/i))

// // .toBeInTheDocument() is an assertion that comes from jest-dom
// // otherwise you could use .toBeDefined()
// expect(screen.getByText(testMessage)).toBeInTheDocument()
