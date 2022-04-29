import React from 'react';
import { Outlet } from "react-router-dom"


import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Container
} from '@mui/material';

import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import { useNavigate } from "react-router-dom";


const Layout = () => {

    const navigate = useNavigate();

    function handleClickBubbleIconButton() {
        navigate("");
    }

    return (
        <>
            <Box>
                <AppBar position="fixed" color="primary">
                    <Toolbar variant="dense">
                        <IconButton onClick={handleClickBubbleIconButton} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <BubbleChartIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h5" color="inherit" component="div">
                            Superheroes
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{ marginTop: 12 }} maxWidth="lg">
                <div>
                    <Typography align="center" variant="h6" color="inherit" component="div">
                        Hero list App
                        </Typography>
                    <Outlet />
                </div>
            </Container>

        </>
    );
};

export default Layout;