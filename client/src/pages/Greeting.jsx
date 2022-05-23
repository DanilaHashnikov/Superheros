import React from 'react';

import { Typography, Button, Box, CardMedia } from '@mui/material';

import { NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';


import s from "../css/Layout.module.css"

import imgSupers from "../img/supers1.jpg"

const Greeting = () => {

    const theme = useTheme();
    return (
        <>
            <header>
                <Typography align="center" variant="body1" color="inherit" component="div" sx={{ mt: 2 }}>
                    <b>Welcome to the start page!)</b> In this application, you can create your own list of heroes. <b>The list is completely subject to your will, so much so that you can both create and delete a hero, in addition, you can edit information about him.</b> All information is stored on a server in a safe place, so you don't have to worry about your pets and have fun. In the future, it is planned to diversify the functionality (authentication, animations). <b>Thanks for your visit!</b>
                </Typography>
            </header>

            <CardMedia
                sx={{ mt: 3 }}
                component="img"
                alt="superhero photo"
                height="400"
                width="200"
                src={imgSupers}
            />

            <Box textAlign="center" sx={{ marginTop: 7 }}>
                {theme.palette.mode === "light" ?
                    <Button variant="contained" size="large">
                        <NavLink className={s.navLink} to="/superheroes">List your heroes</NavLink>
                    </Button>
                    : <Button style={{ backgroundColor: "#121212", color: "white" }} variant="contained" size="large">
                        <NavLink className={s.navLink} to="/superheroes">List your heroes</NavLink>
                    </Button>
                }
            </Box>



        </>
    );
};

export default Greeting;