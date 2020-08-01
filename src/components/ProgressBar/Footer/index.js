import React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'

const Footer = ({
  classes,
  progressbar = {},
  onClickButton,
  onChangeSelect,
}) => {
  const { buttons = [], bars = [], current = '' } = progressbar

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={3}
    >
      <Grid item xs={12} md={2}>
        <FormControl variant='filled'>
          <InputLabel>Current</InputLabel>
          <Select
            value={current}
            onChange={onChangeSelect}
            inputProps={{
              name: 'selectedBarIndex',
              'data-testid': 'select',
              id: 'bar-select',
            }}
          >
            {bars.map((o, i) => {
              return (
                <MenuItem key={i} value={i}>
                  #progress{i + 1}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      {buttons.map((o, i) => {
        return (
          <Grid item key={i} xs={3} md={1}>
            <Button
              title='button'
              variant='contained'
              onClick={onClickButton(o)}
            >
              {o}
            </Button>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default Footer
