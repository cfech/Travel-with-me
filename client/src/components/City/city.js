//Imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tripApi from "../../utils/tripApi"

//Styling
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    bottomRow: {
        justifyContent: "space-around"
    }
});

//City component
const City = ({ name, state, country, handleThree, id, snippet ,userId}) => {
    const classes = useStyles();

    //Function to save a trip
const saveTrip =() =>{
    tripApi.saveTrip(
        {
        name, state, country, snippet, userId
        }
    
    ).then((res) => {
        console.log("trip created");
      })
}

//What the component will return
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                        {name},
                        {state}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                        {country}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {snippet}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottomRow} >
                <Button size="small" color="primary" onClick={(event) =>{ handleThree(event, id); saveTrip();}}>
                    Go Here!!
        </Button>
            </CardActions>
        </Card>
    );
}

export default City
