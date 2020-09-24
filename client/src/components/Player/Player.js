import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: { 
    backgroundColor: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    borderRadius: 0,
    width: '80%',
    height: '100%'
  },
  top: {
    backgroundColor: '#845bb3',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    marginBottom: 10,
  },
  avatar: {
    margin: 20
  },
  end: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    marginBottom: 10
  },
  text: {
    color: '#1a1a1a'
  }
}))

const Player = props => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={3}>
      <Paper className={classes.top}>
        <Avatar className={classes.avatar}>P</Avatar>

      </Paper> 
      <Paper className={classes.end} elevation={2}>
        <Typography className={classes.text}>
          {props.player.bio}
        </Typography>
      </Paper>  
    </Paper>
  )
}

export default Player