import { useState, useEffect} from 'react';

import { useParams, useNavigate, NavLink } from "react-router-dom"

const Hero = () => {

    const {id} = useParams();
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
        <div>
            <div>{hero.nickname}</div>
            <div>{hero.real_name}</div>
            <div>{hero.origin_description}</div>
            <div>{hero.superpowers}</div>
            <div>{hero.catch_phrase}</div>
            <div>Images</div>
            <button onClick={handleBackClick}>back</button>
            <NavLink to={`/superheroes/${id}/edit`}>edit</NavLink>
        </div>
    );
};

export default Hero;