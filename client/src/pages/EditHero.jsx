import { useState, useEffect } from 'react';

import { useNavigate, useParams } from "react-router-dom";

import {
    Button,
    IconButton,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const EditHero = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [hero, setHeroes] = useState('');


    const [nickname, setNickname] = useState(hero.nickname);
    const [realName, setRealName] = useState(hero.real_name);
    const [descr, setDescr] = useState(hero.origin_description);
    const [power, setPower] = useState(hero.superpowers);
    const [phrase, setPhrase] = useState(hero.catch_phrase);

    useEffect(() => {
        fetch(`/superheroes/${id}`)
            .then((res) => res.json())
            .then((res) => setHeroes(res));
    }, [id])


    function handleCancleClick() {
        navigate(-1);
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        try {
            fetch(``, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ _id: id, nickname, real_name: realName, origin_description: descr, superpowers: power, catch_phrase: phrase })
            })
        } catch (error) {
            console.log(error);
        }
        navigate(-1);
    }

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <>
            <DialogTitle>Edit a Superhero</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To edit a hero, fill in the fields with new unique data
                    </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nickname"
                    type="text"
                    fullWidth
                    variant="standard"
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
                    onChange={(e) => setPhrase(e.target.value)}
                    value={phrase}
                />

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

            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleCancleClick}>Cancel</Button>
                <Button variant="contained" onClick={handleFormSubmit}>Save</Button>
            </DialogActions>
        </>
    );
};

export default EditHero;