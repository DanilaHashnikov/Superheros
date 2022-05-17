import React from 'react';

import { NavLink } from "react-router-dom";

import {
    Tooltip,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import s from '../css/Heroes.module.css';
import img from "../img/contemplative-reptile.jpg"

const HeroesCardLogic = ({ heroes, handleDeleteHero }) => {
    return (
        <Box textalign="center">
            {heroes ?
                heroes.length === 0 ?
                    <Typography sx={{display: "flex", justifyContent: "center", mt: 3, color: '#707070'}} gutterBottom variant="h5" component="div">
                        Nothing found
                    </Typography>
                    : heroes.map((hero) => (
                        <Card raised key={hero._id} sx={{ maxWidth: 800, mx: "auto", mb: 4, mt: 4 }}>
                            <CardMedia
                                component="img"
                                alt="superhero photo"
                                height="150"
                                src={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {hero.nickname}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span
                                        style={{ color: '#bb1133' }}
                                    >
                                        Description:
                                </span>
                                    {hero.origin_description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium"><NavLink className={s.navLink} to={`/superheroes/${hero._id}`}>Learn More</NavLink></Button>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => handleDeleteHero(hero._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    ))
                : <div>loading</div>
            }
        </Box>
    );
};

export default HeroesCardLogic;