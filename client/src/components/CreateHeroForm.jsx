import React from 'react';

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
    nickname: yup.string('Enter your nickname').min(3, 'Nickname should be of minimum 3 characters length').required('Nickname is required'),
    realName: yup.string('Enter your realName').min(3, 'Real name should be of minimum 3 characters length').required('Real name is required'),
    descr: yup.string('Enter your descr').min(3, 'Origin description should be of minimum 3 characters length').required('Description is required'),
    power: yup.string('Enter your power').min(3, 'Superpowers should be of minimum 3 characters length').required('Power is required'),
    phrase: yup.string('Enter your phrase').min(3, 'Catch phrase should be of minimum 3 characters length').required('Phrase is required'),
})


const CreateHeroForm = ({ setOpen, open, superHeroesRender, BASE_URL }) => {

    const formik = useFormik({
        initialValues: {
            nickname: '',
            realName: '',
            descr: '',
            power: '',
            phrase: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("values", values);
            const data = { nickname: values.nickname, real_name: values.realName, origin_description: values.descr, superpowers: values.power, catch_phrase: values.phrase }
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
        },
    });

    const handleClose = () => {
        setOpen(false);
    };

    const Input = styled('input')({
        display: 'none',
    });


    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Create a Superhero</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a hero, fill in the fields with unique data
                    </DialogContentText>
                    <TextField
                        name="nickname"
                        autoFocus
                        margin="dense"
                        label="Nickname"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.nickname}
                        error={formik.touched.nickname && Boolean(formik.errors.nickname)}
                        helperText={formik.touched.nickname && formik.errors.nickname}
                    />
                    <TextField
                        name="realName"
                        autoFocus
                        margin="dense"
                        label="Real name"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.realName}
                        error={formik.touched.realName && Boolean(formik.errors.realName)}
                        helperText={formik.touched.realName && formik.errors.realName}
                    />
                    <TextField
                        name="descr"
                        autoFocus
                        margin="dense"
                        label="Origin description"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.descr}
                        error={formik.touched.descr && Boolean(formik.errors.descr)}
                        helperText={formik.touched.descr && formik.errors.descr}
                    />
                    <TextField
                        name="power"
                        autoFocus
                        margin="dense"
                        label="Superpowers"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.power}
                        error={formik.touched.power && Boolean(formik.errors.power)}
                        helperText={formik.touched.power && formik.errors.power}
                    />
                    <TextField
                        name="phrase"
                        autoFocus
                        margin="dense"
                        label="Catch phrase"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.phrase}
                        error={formik.touched.phrase && Boolean(formik.errors.phrase)}
                        helperText={formik.touched.phrase && formik.errors.phrase}
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
                    <Button type="submit">Create</Button>
                </DialogActions>
            </form>
        </Dialog >
    );
};

export default CreateHeroForm;