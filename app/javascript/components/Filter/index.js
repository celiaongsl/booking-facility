import { Typography } from '@material-ui/core';
import React from 'react';

const Filter = () => {
    return(
        <div>
           <Typography variant="h6"> Filter by</Typography> <br/>
           <b>Floor</b>
           {/* Probably will need to make it a component? To map? */}
           <b>Features</b>
           <b>Capacity</b>
        </div>
    )
}

export default Filter;