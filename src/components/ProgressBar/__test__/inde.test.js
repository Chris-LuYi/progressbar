import React from 'react'
import { render, fireEvent, screen, debug } from '@utils/test'
import ProgressBar from '../index'

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomArray = (maxArrayCount, item) => {
  const arryLength = getRandomArbitrary(1, maxArrayCount)
  const ary = []
  for (let i = 0; i < arryLength; i++) {
    ary.push(getRandomArbitrary(item.min, item.max))
  }
  return ary
}

const randomConfig = () => {
  return {
    buttons: getRandomArray(5, { min: -100, max: 100 }),
    bars: getRandomArray(3, { min: 0, max: 100 }),
    limit: getRandomArbitrary(1, 400),
  }
}
const cfg = randomConfig()

const renderOptions = {
  initialState: {
    progressbar: {
      ...cfg,
      current: 0,
    },
  },
}
test('no error with default props', () => {
  render(<ProgressBar />)
  expect(screen.getByTestId('select')).toBeTruthy()
})

test('dropdown change logic check', async () => {
  render(<ProgressBar />, renderOptions)
  const select = screen.getByTestId('select')
  expect(select).toBeTruthy()

  const selectIndex = cfg.bars.indexOf(
    cfg.bars[Math.floor(Math.random() * cfg.bars.length)],
  )
  select.value = selectIndex
  await fireEvent.change(select)

  expect(select.value).toEqual(`${selectIndex}`)
})

test('button click check current bar value', async () => {
  render(<ProgressBar />, renderOptions)
  const buttons = screen.getAllByTitle('button')
  const { initialState: { progressbar } } = renderOptions
  const { current, bars, buttons: btns } = progressbar
  debug(buttons[0])
  const bar = screen.getAllByTestId('bar')[current]
  expect(bar).toHaveTextContent(bars[current] + '%')

  let pct = bars[current]
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i]
    await fireEvent.click(element, { button: 1 })
    pct = pct + btns[i]
    if (pct < 0) pct = 0
    expect(bar).toHaveTextContent(`${pct}%`)
  }
})
