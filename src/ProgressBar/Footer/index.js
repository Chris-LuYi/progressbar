import React, { useState } from 'react'
import {
  withStyles,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import style from './style'

const Footer = ({ classes, config = {} }) => {
  const { buttons = [], bars = [] } = config
  const [
    val,
    setValue,
  ] = useState('')

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item>
        <FormControl className={classes.formControl}>
          <Select
            native
            value={val}
            onChange={(e) => {
              console.log(e.target.value, typeof e.target.value)
              setValue(e.target.value)
            }}
            inputProps={{
              name: 'selectedBarIndex',
              'data-testid': 'select',
              id: 'bar-select',
            }}
          >
            {bars.map((o, i) => {
              return (
                <option key={i} value={i}>
                  #progress{i + 1}
                </option>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      {buttons.map((o, i) => {
        return (
          <Grid key={i}>
            <Button>{o}</Button>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default withStyles(style, { name: 'Footer' })(Footer)
