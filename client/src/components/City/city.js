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
        margin: 10,
        boxShadow: "0px 5px 20px rgb(71, 71, 71)"
    },
    media: {
        height: 140,
    },
    bottomRow: {
        justifyContent: "space-around"
    },
    header: {
        backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
        height: 100
    },
    textArea: {
        height: 100
    }
});

//City component
const City = ({ name, state, country, handleThree, id, snippet, image, userId }) => {
    const classes = useStyles();

    //Function to save a trip
    const saveTrip = () => {
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
            <CardActionArea onClick={(event) => { handleThree(event, id); saveTrip(); }}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name}
                />
                <CardContent className={classes.header}>
                    <Typography gutterBottom variant="h6" component="h3">
                        {name},

                        {/* image={
                  item.images[0]
                    ? item.images[0].sizes.medium.url
                    : "https://via.placeholder.com/150"
                } */}


                        {country !== "United_States"
                        ? ""
                        :
                        state.replace(/[0-9]/g, "").replace(/_/g, " ")}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                        {country.replace(/_/g, " ").replace(/[0-9]/g, "")}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.textArea}>
                        {snippet}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default City
