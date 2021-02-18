import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Header: {
        maxHeight: '50px',
        width: '100%',
    }
}));

const Header = () => {
    const classes = useStyles();

    return(
        <div className={classes.Header}>
            <Typography variant="h4">Book a Room: Raffles Office</Typography>
        </div>
    )
}

export default Header;