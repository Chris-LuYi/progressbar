import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetch } from '@utils'
import { withStyles } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import ProgressBar from '@components/ProgressBar'

import styles from './style'
const ProgressBarPage = ({
  classes,
  progressbar,
  dispatch,
  theme,
  ...restProps
}) => {
  const [
    dataLoaded,
    setDataLoaded,
  ] = useState(false)
  useEffect(
    () => {
      fetch({
        url: 'http://pb-api.herokuapp.com/bars',
        option: {
          method: 'GET',
        },

        onSuccess: (r) => {
          dispatch({
            type: 'UPDATE_STATE',
            payload: {
              ...r,
              current: 0,
            },
          })
          setDataLoaded(true)
        },
        onError: (error) => {
          console.log(error)
        },
      })
    },
    [
      dispatch,
    ],
  )

  return (
    <div className={classes.main}>
      {dataLoaded ? (
        <ProgressBar />
      ) : (
        <React.Fragment>
          <Skeleton
            variant='rect'
            height={100}
            style={{ marginBottom: theme.spacing() }}
          />
          <Skeleton variant='rect' width='60%' height={20} />
        </React.Fragment>
      )}
    </div>
  )
}

export default compose(
  withStyles(styles, { name: 'ProgressBarPage', withTheme: true }),
  connect(),
)(ProgressBarPage)
