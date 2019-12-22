import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const is = {
    width: '35px',
    marginLeft: '5px'
}

export default function Inputs({label, name, onClick, onChange}) {

    const press = name => event => {
        onClick(name);
    };

    return (
        <Box width={120}>
            <Typography variant="overline" display='inline'>{label}</Typography>
            <Input margin="dense" name={name} onChange={onChange} style={is} />
            <IconButton color="primary" onClick={press(name)} size="small">
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Box>
    )
}
