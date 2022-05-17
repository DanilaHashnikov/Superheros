import { Routes, Route } from "react-router-dom";

import { useMemo, useState, createContext, useContext } from 'react'

import Layout from "./Layout";
import Hero from "./pages/Hero";
import EditHero from './pages/EditHero'
import Heroes from "./pages/Heroes"
import Greeting from "./pages/Greeting"


import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


const ColorModeContext = createContext({ toggleTheme: () => { } });

function App() {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);


    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout colorMode={colorMode} theme={theme} />}>
                    <Route index element={<Greeting />} />
                    <Route path="/superheroes" element={<Heroes />} />
                    <Route path="/superheroes/:id" element={<Hero />} />
                    <Route path="/superheroes/:id/edit" element={<EditHero />} />
                </Route>
            </Routes>
        </div>
    );
}

function ToggleColorMode() {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), []);

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
            },
        }), [mode]);


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}


export default ToggleColorMode;
// export default App;
