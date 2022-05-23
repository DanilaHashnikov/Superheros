import { useState, useEffect } from 'react';

import HeroesCardLogic from '../components/HeroesCardLogic';
import CreateButton from './../components/CreateButton';
import CreateHeroForm from './../components/CreateHeroForm'

import { CircularProgress, Pagination } from '@mui/material';

import s from "../css/Heroes.module.css";


const Heroes = () => {

    const [heroes, setHeroes] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [page, setPage] = useState(1);
    const [frequency] = useState(3)
    const [count, setCount] = useState(0);
    
    const BASE_URL = "http://localhost:3000";
    
    // Filter 
    const [inputField, setInputField] = useState("");

    // Filter

    const lastHero = frequency * page;
    const firstHero = lastHero - frequency;

    console.log("heroes", heroes);

    const currentActivityHeroes = heroes.filter((el) => {
        if (el.nickname.toLowerCase().includes(inputField.toLowerCase())) {
            return el
        }
    
    }).slice(
        firstHero,
        lastHero
    );

    async function superHeroesRender() {
        setLoading(true);
        await fetch(`${BASE_URL}/superheroes`)
            .then(res => res.json())
            .then(res => {
                setHeroes(res);
                setCount(Math.ceil(res.length / frequency));
                setPage(Math.ceil(res.length / frequency));
            })
        setLoading(false);
    }

    useEffect(() => {
        superHeroesRender();
        //eslint-disable-next-line
    }, []);


    async function handleDeleteHero(id) {
        await fetch(`${BASE_URL}/superheroes/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => console.log(res))
        superHeroesRender();
    }

    const handlePaginationButton = function (e, page) {
        setPage(page);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <div className={s.wrapper}>
                <input 
                    className={s.search} 
                    type="search" 
                    placeholder="Search..."
                    value={inputField} 
                    onChange={(e) => {
                    setPage(1);
                    setInputField(e.target.value)
                }} 
                />
            </div>

            {loading
                ? <div style={{ marginLeft: 50 }}><CircularProgress /></div>
                : <HeroesCardLogic
                    heroes={currentActivityHeroes}
                    handleDeleteHero={handleDeleteHero} />
            }

            <CreateButton handleClickOpen={handleClickOpen} />

            {(count === 1 || false)
                ? null
                : <Pagination
                    onChange={handlePaginationButton}
                    page={page}
                    count={count}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    sx={{ display: "flex", justifyContent: 'center', pb: 3 }}
                />
            }
            <CreateHeroForm
                setOpen={setOpen}
                open={open}
                superHeroesRender={superHeroesRender}
                BASE_URL={BASE_URL} />
        </>
    );
};

export default Heroes;