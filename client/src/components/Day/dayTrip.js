import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    avatar: {
        backgroundColor: red[500],
    },
    items: {
        justifyContent: "space-around"
    }
}));

const DayTrip = ({ title, description, name, score }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box width="100%">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}>
                <ListItem>
                    {title}
                </ListItem>
                <ListItem>
                    {description}
                </ListItem>
                <ListItem className={classes.items} button onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                    {name} {<Avatar aria-label="recipe" className={classes.avatar}>{score}</Avatar>
                    }
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>

                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Box>
    );
}



export default DayTrip