const todos = (
  state = {
    buttons: [],
    bars: [],
    limit: 100,
    current: 0,
  },
  action,
) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
      }
    case 'UPDATE_BAR':
      const { bars, current } = state
      const currentBarValue = bars[current]
      const newValue =
        currentBarValue + action.payload < 0
          ? 0
          : currentBarValue + action.payload
      bars.splice(current, 1, newValue)
      return {
        ...state,
        bars: [
          ...bars,
        ],
      }
    default:
      return state
  }
}

export default todos
