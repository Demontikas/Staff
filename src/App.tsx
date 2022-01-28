import React from 'react';
import PersonList from "./component/PersonList";
import {createTheme, responsiveFontSizes, CssBaseline, ThemeProvider} from "@mui/material";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import PersonProfile from "./component/PersonProfile";
import {indigo} from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}
const defaultTheme = createTheme();

let theme = createTheme({
    breakpoints: {
        values: {
            ...defaultTheme.breakpoints.values,
            mobile: 480,
            tablet: 740,
            laptop: 1024,
            desktop: 1200,
        },
    },
    palette: {
        primary: indigo
    },
});
theme = responsiveFontSizes(theme);
function App() {
  return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline />
                <HashRouter>
                    <Routes>
                        <Route element={<MainPage />} path="/">
                            <Route element={<PersonList />} path="/"/>
                            <Route element={<PersonProfile />} path=":id"/>
                        </Route>
                    </Routes>
                </HashRouter>
            </div>
        </ThemeProvider>
  );
}

export default App;
