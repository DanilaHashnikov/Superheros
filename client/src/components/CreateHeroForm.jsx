import React, { useState } from 'react';

import {
    Button,
    IconButton,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack
} from '@mui/material';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import { useFormik } from "formik";
import * as yup from "yup";


const validationSchema = yup.object({
    nickname: yup.string(),
    realName: yup.string(),
    descr: yup.string(),
    power: yup.string(),
    phrase: yup.string(),
})


const CreateHeroForm = ({ setOpen, open, superHeroesRender, BASE_URL }) => {

    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [descr, setDescr] = useState('');
    const [power, setPower] = useState('');
    const [phrase, setPhrase] = useState('');

    const formik = useFormik({
        initialValues: {
            nickname: '',
            realName: '',
            descr: '',
            power: '',
            phrase: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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


    const handleClose = () => {
        setOpen(false);
    };

    const Input = styled('input')({
        display: 'none',
    });


    return (
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

                <Stack sx={{ marginTop: 3 }} direction="row" alignItems="center" spacing={2}>
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
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreateForm}>Create</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateHeroForm;