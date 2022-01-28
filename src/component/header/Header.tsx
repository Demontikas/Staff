import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
    let navigate = useNavigate();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div"
                            sx={{cursor: "pointer"}}
                            onClick={() => navigate("/")}>
                    NETI
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    );
}
export default Header;