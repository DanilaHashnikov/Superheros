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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useNavigate } from "react-router-dom";

import "./index.css"


const Layout = ({ colorMode, theme }) => {

    const navigate = useNavigate();

    function handleClickBubbleIconButton() {
        navigate("");
    }

    return (
        <>
            <Box>
                <AppBar position="fixed" color="primary">
                    <Toolbar variant="dense" sx={{ display: "flex", justifyContent: 'space-between', ml: 25, mr: 25 }}>
                        <div>
                            <IconButton onClick={handleClickBubbleIconButton} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <BubbleChartIcon fontSize="large" />
                                <Typography variant="h5" color="inherit" component="div">
                                    Superheroes
                                </Typography>
                            </IconButton>
                        </div>
                        <label className={"label-styles"}>
                            {theme.palette.mode} mode
                            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </label>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{ paddingTop: 12 }} maxWidth="lg">
                <div>
                    <Typography align="center" variant="h6" color="interitance" component="div">
                        Hero list App
                    </Typography>
                    <Outlet />
                </div>
            </Container>
        </>
    );
};

export default Layout;