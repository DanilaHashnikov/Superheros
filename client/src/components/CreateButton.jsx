import React from 'react';

import {
    Button,
    Box
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

const CreateButton = ({ handleClickOpen }) => {

    const theme = useTheme();

    return (
        <Box textAlign="center" sx={{ marginTop: 10, marginBottom: 10 }}>
            {theme.palette.mode === "light" 
                ? <Button size="large" variant="contained" onClick={handleClickOpen}>Create a Superhero</Button> 
                : <Button size="large" variant="contained" onClick={handleClickOpen} style={{backgroundColor: "#121212", color: "white"}}>Create a Superhero</Button>}
        </Box>
    );
};

export default CreateButton;