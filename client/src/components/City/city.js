import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const City = ({ name, state, country, handleThree, id, snippet }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}:{state}:{country}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {snippet}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottomRow} >
                <Button size="small" color="primary" onClick={(event) => handleThree(event, id)}>
                    GO
        </Button>

            </CardActions>
        </Card>
    );
}

export default City

// const City = ({ name, state, country, handleThree, id }) => {


//     return (
//         <Grid item>
//             <p>{name}:{state}:{country}</p>
//             <Button onClick={(event) => handleThree(event, id)}>GO!</Button>

//         </Grid>
//     )
// }

// export default City