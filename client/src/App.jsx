import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Hero from "./pages/Hero";
import EditHero from './pages/EditHero'
import DeleteHero from "./pages/DeleteHero"
import Heroes from "./pages/Heroes"
import Greeting from "./pages/Greeting"

function App() {
    return (
        <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Greeting />} />
                    <Route path="/superheroes" element={<Heroes />} />
                    <Route path="/superheroes/:id" element={<Hero />} />
                    <Route path="/superheroes/:id/edit" element={<EditHero />} />
                    <Route path="/superheroes/:id" element={<DeleteHero />} />
                </Route>
        </Routes>
    );
}

export default App;
