import React, { useMemo } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core'
import style from './style'

const Bar = ({ classes, value, active, limit }) => {
  let percentage = 0

  percentage = useMemo(
    () => {
      if (typeof value !== 'number') return 0
      let updatedPct = percentage + value
      if (updatedPct < 0) updatedPct = 0
      return updatedPct
    },
    [
      percentage,
      value,
    ],
  )

  return (
    <div
      className={classnames({
        [classes.root]: true,
        [classes.current]: active,
      })}
      data-testid='bar'
      aria-selected={active}
    >
      <span className={classes.value}>{percentage}%</span>
      <div
        className={classnames({
          [classes.bar]: true,
          [classes.barExceed]: percentage > limit,
        })}
        style={{ width: percentage + '%' }}
      />
    </div>
  )
}

export default withStyles(style, { name: 'Bar' })(
  React.memo(Bar, (prevProps, nextProps) => {
    return (
      prevProps.value === nextProps.value &&
      prevProps.active === nextProps.active
    )
  }),
)
