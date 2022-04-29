import { useState, useEffect } from 'react';

import { useNavigate, useParams } from "react-router-dom";

const EditHero = () => {

    const {id} = useParams();
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

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="nickname..." name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                <input type="text" placeholder="Real name..." name="real_name" value={realName} onChange={(e) => setRealName(e.target.value)} />
                <input type="text" placeholder="Description..." name="origin_description" value={descr} onChange={(e) => setDescr(e.target.value)} />
                <input type="text" placeholder="Power..." name="superpowers" value={power} onChange={(e) => setPower(e.target.value)} />
                <input type="text" placeholder="Phrase..." name="catch_phrase" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
                <input type="button" onClick={handleCancleClick} value="Cancel" />
                <input type="submit" value="Save" />
            </form>
            <div>
                smthtuturuu
            </div>
        </>
    );
};

export default EditHero;