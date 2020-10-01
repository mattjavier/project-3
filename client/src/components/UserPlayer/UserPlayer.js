import React, { useState, useEffect } from 'react'
import { join } from 'path'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    margin: 'auto',
    borderRadius: 5,
    width: '90%',
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
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 20,
    paddingBottom: 10
  },
  content: {
    width: '95%',
    margin: 10,
    borderRadius: 5,
  },
  inner: {
    padding: 5
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 50,
    margin: 20,
    boxShadow: theme.shadows[6],
    backgroundColor: '#263238'
  },
  discord: {
    color: '#ffffff',
    letterSpacing: 2
  },
  video: {
    width: '95%',
    borderRadius: 0,
    marginBottom: 10,
    boxShadow: theme.shadows[6],
  },
  text: {
    color: '#1a1a1a'
  },
}))

let avatarSrc

const UserPlayer = props => {
  const classes = useStyles()
  console.log(props.player)
  console.log(props.player.avatar.length)



  console.log(avatarSrc)

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=')

  const [gamesState, setGamesState] = useState({
    games: []
  })

  useEffect(() => {

    if (props.player.games.length > 0) {
      props.player.games.map(game => {
        game = game.toLowerCase()

        game = game.replace(' ', '-')

        axios.get(`https://api.rawg.io/api/games/${game}`)
          .then(({ data }) => {
            let updated = gamesState.games
            updated.push(data.background_image)
            setGamesState({ ...gamesState, games: updated})
          })
          .catch(err => console.log(err))
      })
    }
  }, [])

  return (
    <Grid>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.top}>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={props.player.avatar}
          />
          <Typography
            className={classes.discord}
            variant="h6"
          >
            Discord: {props.player.discord}
          </Typography>
        </Paper>
        <Paper className={classes.content} elevation={5}>
          <div className={classes.inner}>
            <Typography className={classes.text}>
              Player Bio: {props.player.bio}
            </Typography>
          </div>
        </Paper>
        <Paper className={classes.content} elevation={5}>
          <div className={classes.inner}>
            {
              props.player.xbox.length > 0 ? (
                <Typography className={classes.text}>
                  Xbox: {props.player.xbox}
                </Typography>
              ) : null
            }
            {
              props.player.playstation.length > 0 ? (
                <Typography className={classes.text}>
                  PlayStation: {props.player.playstation}
                </Typography>
              ) : null
            }
            {
              props.player.nintendoSwitch.length > 0 ? (
                <Typography className={classes.text}>
                  Nintendo Switch: {props.player.nintendoSwitch}
                </Typography>
              ) : null
            }
            {
              props.player.pc.length > 0 ? (
                <Typography className={classes.text}>
                  PC: {props.player.pc}
                </Typography>
              ) : null
            }
            {
              props.player.genres.length > 0 ? (
                <Typography className={classes.text}>
                  Genres: {props.player.genres.join(', ')}
                </Typography>
              ) : null
            }
            {
              props.player.games.length > 0 ? (
                <Typography className={classes.text}>
                  Games: {props.player.games.join(', ')}
                </Typography>
                // gamesState.games.map(game => (
                //   <img width="400" src={game} />
                // ))
              ) : null
            }

          </div>
        </Paper>
        {
          props.player.highlight ? (
            <YoutubeEmbedVideo className={classes.video} videoId={props.player.highlight.slice(start + 1)} suggestions={false} />
          ) : null
        }
      </Paper>
    </Grid>
  )
}

export default UserPlayer