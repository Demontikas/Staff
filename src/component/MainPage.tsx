import React from 'react';
import Header from "./header/Header";
import {Toolbar} from "@mui/material";
import PersonEditDialog from "./PersonEditDialog";
import DeleteDialog from "./DeleteDialog";
import {Outlet} from "react-router-dom";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "./ScrollTop";

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Toolbar id="top-anchor" />
            <Outlet />
            <PersonEditDialog />
            <DeleteDialog />
            <ScrollTop >
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

export default MainPage;