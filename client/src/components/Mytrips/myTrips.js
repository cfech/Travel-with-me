import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton'
<<<<<<< HEAD
import CardTravelIcon from '@material-ui/icons/CardTravel';
=======
>>>>>>> 1a7535e6674e66a1a3f63037f384ded83170b3f9
import items from "../../utils/item"
import trips from "../../utils/tripApi"



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",

        backgroundColor: "#9499A7",
    },
    nested: {
        paddingLeft: theme.spacing(4),
        justifyContent: "flex-beginning"
    },
    delete: {
        color: "red",
    },
    travelIcon: {
        color: "white"
    },
    top: {
        backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
        color: "white",
        boxShadow: "0px 5px 20px rgb(71, 71, 71)"
    }
}));


const MyTrips = ({ name, mainId, tripItem, country, key, getUserTrips, getTripItems }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const itemDelete = (id) => {
        items.deleteItem(id)
<<<<<<< HEAD
        
        .then (() => {
            console.log("item Deleted ")
            getTripItems()
        } )
    
=======

            .then(() => {
                console.log("item Deleted ")
                getTripItems()
            })

>>>>>>> 1a7535e6674e66a1a3f63037f384ded83170b3f9
    }

    const tripDelete = (id) => {

        trips.deleteTrip(id)
<<<<<<< HEAD
        .then(() => {
            console.log("trip Deleted")
            getUserTrips()
        })
=======
            .then(() => {
                console.log("trip Deleted")
                getUserTrips()
            })
>>>>>>> 1a7535e6674e66a1a3f63037f384ded83170b3f9
    }


    let tripPlaces = tripItem.filter(place => mainId === place.tripId)

    console.log("trip places ++++++++++++++")
    console.log(tripPlaces)
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"

                className={classes.root}
            >

                <ListItem button onClick={handleClick} key={key} className={classes.top}>
                    <ListItemIcon className={classes.travelIcon}>
<<<<<<< HEAD
                        <CardTravelIcon onClick={() => tripDelete(mainId)} />
=======
                        <HighlightOffIcon className={classes.delete} onClick={() => tripDelete(mainId)} />
>>>>>>> 1a7535e6674e66a1a3f63037f384ded83170b3f9
                    </ListItemIcon>
                    <ListItemText>{name}, {country.replace(/_/g, " ").replace(/[0-9]/g, "")}</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {/* //TRIP ITEMS // */}

                        {tripPlaces.map((item) => (
                            <ListItem button className={classes.nested} key={item._id}>
                                <IconButton className={classes.delete} onClick={() => itemDelete(item._id)}><HighlightOffIcon /></IconButton>
                                {item.name}
<<<<<<< HEAD
                                <IconButton className={classes.delete} onClick={() => itemDelete(item._id)}><HighlightOffIcon /></IconButton>
=======

>>>>>>> 1a7535e6674e66a1a3f63037f384ded83170b3f9
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

            </List>

        </>
    )
}

export default MyTrips



