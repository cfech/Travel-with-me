///Imports
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import tripApi from "../../utils/tripApi"
import itemApi from "../../utils/item"

//Styling
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 12,
    boxShadow: "0px 5px 20px rgb(71, 71, 71)"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red["500"],
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    }
  },
  heart: {
    color: red["200"]
  },
  textArea: {
    height: 140,
  },
  header: {
    backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)"
  }
}));


//Interest component
const Interest = ({ name, score, snippet, image, attribution, id, userId }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [tripId, setTripId] = useState("")
  useEffect(() => {
    tripApi.getUserTrips(userId)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => { console.log(err) })
  }, [])

  const saveItem = () => {
    itemApi.saveItem({
      name, score, snippet, image, attribution, tripId, userId
    }).then((res) => {
      console.log("item created");
    })
  }
  // const saveItem2  = () => {
  //  console.log("click")
  // }





  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        title={name}

        avatar={
          <Avatar aria-label="rating" className={classes.avatar}>
            {score}
          </Avatar>
        }


      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.textArea}>
          {snippet}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={saveItem}>
          <FavoriteIcon className={classes.heart} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Links:</Typography>
          <CardContent>

            <ul>
              {attribution.map(link => (
                <li className={classes.link} key={link.source_id}><a className={classes.link} target="_blank" rel="noopener noreferrer" href={link.url}>{link.source_id.charAt(0).toUpperCase() + link.source_id.slice(1)}</a></li>
              ))}
            </ul>


          </CardContent>



        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Interest;