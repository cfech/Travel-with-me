//Imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Grid } from "@material-ui/core";

//Styling
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: "1px solid gray",
        boxShadow: "0px 5px 20px rgb(71, 71, 71)"
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    avatar: {
        backgroundColor: red[500],
    },
    items: {
        justifyContent: "space-around",
        backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
        color: "white"
    },
    cont: {
        margin: 2
    },
    link: {
        color: "black",
        textDecoration: "none",
        "&:hover": {
            color: "black",
        }
    }
}));

//Day Trip component
const DayTrip = ({ title, description, name, score, attribution }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid item container className={classes.cont}>
            <Grid item xs={false} sm={1} md={2} />
            <Grid item xs={12} sm={10} md={8}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}>
                    <ListItem>
                        <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                    </ListItem>
                    <ListItem >
                        {description}
                    </ListItem>
                    <ListItem className={classes.items} button onClick={handleClick} >
                        {open ? <ExpandLess /> : <ExpandMore />}
                        {name} {<Avatar aria-label="Trip" className={classes.avatar}>{score}</Avatar>
                        }
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ul>
                                    {attribution.map(link => (
                                        <li className={classes.link} key={link.source_id}><a className={classes.link} target="_blank" rel="noopener noreferrer" href={link.url}>{link.source_id.charAt(0).toUpperCase() + link.source_id.slice(1)}</a></li>
                                    ))}
                                </ul>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={false} sm={1} md={2} />
        </Grid>
    );
}

export default DayTrip