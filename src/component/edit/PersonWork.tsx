import React from 'react';
import PersonStore from "../../store/person-store";
import {work} from "../../data/data";
import {MenuItem} from "@mui/material";
import TextField from "@mui/material/TextField";
import {observer} from "mobx-react-lite";

const PersonWork = observer(() => {
    return (
        <TextField
            id="work"
            select
            margin="dense"
            label="Занятость"
            sx={{width: {xs: "100%"}, maxWidth: 400}}
            value={PersonStore.work}
            onChange={(event) => PersonStore.setWork(event)}
        >
            {work.map((value) => (
                <MenuItem key={value} value={value}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
});

export default PersonWork;