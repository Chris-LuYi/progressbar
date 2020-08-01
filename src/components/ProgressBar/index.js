import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Footer from './Footer'
import Bar from './Bar'

const ProgressBar = ({
  classes,
  progressbar = {},
  dispatch,
  theme,
  ...restProps
}) => {
  const { bars = [], current = 0, limit } = progressbar

  const onChangeCurrentProgressBar = useCallback(
    (e) =>
      dispatch({
        type: 'UPDATE_STATE',
        payload: {
          current: e.target.value,
        },
      }),
    [
      dispatch,
    ],
  )
  const onClickIncrementButton = useCallback(
    (val) => (e) => {
      dispatch({
        type: 'UPDATE_BAR',
        payload: val,
      })
    },
    [
      dispatch,
    ],
  )

  return (
    <React.Fragment>
      {bars.map((o, i) => (
        <Bar key={i} limit={limit} value={o} active={current === i} />
      ))}
      <Footer
        progressbar={progressbar}
        onChangeSelect={onChangeCurrentProgressBar}
        onClickButton={onClickIncrementButton}
      />
    </React.Fragment>
  )
}

export default compose(
  connect((state) => ({
    progressbar: state.progressbar,
  })),
)(ProgressBar)
