import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Player from '../Player'

// const getModalStyle = () => {
//   const top = 50 + Math.round(Math.random() * 20) - 10
//   const left = 50 + Math.round(Math.random() * 20) - 10

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   }
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '75%',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[5],
    paddingTop: 1,
  },
  modal: {
    position: 'absolute',
    top: 50,
    borderRadius: 1,
    overflowY: 'scroll'
  },
  button: {
    fontSize: 13
  }
}))

const PlayerModal = props => {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {
        props.disabled === true ? (
          <Button className={classes.button} variant="contained" color="secondary">
            View Profile
          </Button>
        ) : (
          <Button className={classes.button} variant="contained" color="secondary" onClick={handleOpen}>
            View Profile
          </Button>
        )
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Player player={props.playerInfo} user={props.user} />
      </Modal>
    </div>
  )
}

export default PlayerModal