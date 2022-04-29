import { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Tooltip,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const Heroes = () => {

    const [heroes, setHeroes] = useState([]);
    const [open, setOpen] = useState(false);

    const BASE_URL = "http://localhost:3000"


    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [descr, setDescr] = useState('');
    const [power, setPower] = useState('');
    const [phrase, setPhrase] = useState('');


    useEffect(() => {
        superHeroesRender()
    }, [])

    async function superHeroesRender() {
        await fetch(`${BASE_URL}/superheroes`)
            .then(res => res.json())
            .then(res => setHeroes(res));
    }

    async function handleCreateForm(e) {
        e.preventDefault();
        const data = { nickname, real_name: realName, origin_description: descr, superpowers: power, catch_phrase: phrase }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        await fetch(`${BASE_URL}/superheroes`, requestOptions).then((res) => console.log(res)).catch((res) => console.log(res));
        setOpen(false);
        superHeroesRender();
    }

    async function handleDeleteHero(id) {
        await fetch(`${BASE_URL}/superheroes/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => console.log(res))
        superHeroesRender();
    }




    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Input = styled('input')({
        display: 'none',
    });




    return (
        <>
            {heroes ?
                heroes.map((hero) => (
                    <Card key={hero._id} sx={{ maxWidth: 800 }}>
                        <CardMedia
                            component="img"
                            alt="superhero photo"
                            height="100"
                            image=""
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
                            <Button size="small"><NavLink to={`/superheroes/${hero._id}`}>Learn More</NavLink></Button>
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


            <Button variant="contained" onClick={handleClickOpen}>
                Create a Superhero
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a Superhero</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a hero, fill in the fields with unique data
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Nickname"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => setNickname(e.target.value)}
                            value={nickname}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Real name"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => setRealName(e.target.value)}
                            value={realName}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Origin description"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => setDescr(e.target.value)}
                            value={descr}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Superpowers"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => setPower(e.target.value)}
                            value={power}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Catch phrase"
                            type="text"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => setPhrase(e.target.value)}
                            value={phrase}
                        />

                    </DialogContent>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Upload
                        </Button>
                        </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Stack>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCreateForm}>Create</Button>
                    </DialogActions>
            </Dialog>
        </>
    );
};

export default Heroes;