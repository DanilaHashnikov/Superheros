import { useState, useEffect } from 'react';

import { useParams, useNavigate, NavLink } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import s from "../css/Heroes.module.css"

import Image from "../img/contemplative-reptile.jpg"

const Hero = () => {

    const { id } = useParams();
    const [hero, setHeroes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/superheroes/${id}`)
            .then((res) => res.json())
            .then((res) => setHeroes(res));
    }, [id])

    function handleBackClick() {
        navigate("/superheroes", { replace: true });
    }


    return (

        <>
            <Card sx={{ maxWidth: 800, mx: "auto", mb: 4, mt: 3 }}>
                <CardMedia
                    component="img"
                    alt="superhero photo"
                    height="350"
                    src={Image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {hero.nickname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span
                            style={{ color: '#bb1133' }}
                        >
                            Real name:
                                </span>
                        {hero.real_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span
                            style={{ color: '#bb1133' }}
                        >
                            Description:
                                </span>
                        {hero.origin_description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span
                            style={{ color: '#bb1133' }}
                        >
                            Superpower:
                                </span>
                        {hero.superpowers}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span
                            style={{ color: '#bb1133' }}
                        >
                            Catch phrase:
                                </span>
                        {hero.catch_phrase}
                    </Typography>
                </CardContent>
                <CardActions textalign="center">
                    <Button onClick={handleBackClick}>back</Button>
                    <Button>
                        <NavLink className={s.navLink} to={`/superheroes/${id}/edit`}>edit</NavLink>
                    </Button>
                </CardActions>
            </Card>

        </>
    );
};

export default Hero;