
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";








const useStyles = makeStyles({
    root: {
        width: "97%",
        marginTop: 10,
        boxShadow: "0px 5px 20px rgb(71, 71, 71)"
    },
    media: {
        height: 140,
    },
    textArea: {
        backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
        color: "white",
        justifyContent: "space-around"
    },
    textSub: {
        textJustify: "center",
        color: "white"
    }


});

const Options = ({ handleInterest, handleDay }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item container display="row">
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={(event) => { handleInterest(event) }}>
                            <CardMedia
                                className={classes.media}
                                image="https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/rohan-reddy-WKtLEUqfYq4-unsplash-scaled-e1582652393332-1281x612.jpg"
                                title="Local Places of Interest"
                            />
                            <CardContent className={classes.textArea}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Places of Interest
                                </Typography>
                                <Typography variant="body2" component="p">
                                    find places blah blah
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                {/* ////////////////////second card////////////////////////// */}

                <Grid item xs={6} spacing={2}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={(event) => { handleDay(event) }}>
                            <CardMedia
                                className={classes.media}
                                image="https://liveartgalleryfabrics.com/wp-content/uploads/2017/10/day-trip-logo-transparent.png"
                                title="Day Trip"
                            />
                            <CardContent className={classes.textArea}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Day trippin'
                                </Typography>
                                <Typography variant="body2" component="p" >
                                    day trips
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>

                </Grid>

            </Grid>

        </>
    )
}





export default Options