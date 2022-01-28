import React from 'react';
import TextField from "@mui/material/TextField";
import PersonStore from "../../store/person-store";
import {observer} from "mobx-react-lite";

const PersonName = observer(() => {
    return (
        <React.Fragment>
            <TextField
                autoFocus
                margin="dense"
                required
                label="Фамилия"
                type="text"
                sx={{width: {xs: "100%"}, maxWidth: 400}}
                value={PersonStore.surname}
                onChange={(event) => PersonStore.setSurname(event)}
                variant="outlined"
            />
            <TextField
                margin="dense"
                required
                label="Имя"
                type="text"
                sx={{width: {xs: "100%"}, maxWidth: 400}}
                value={PersonStore.name}
                onChange={(event) => PersonStore.setName(event)}
                variant="outlined"
            />
            <TextField
                margin="dense"
                required
                label="Отчество"
                type="text"
                sx={{width: {xs: "100%"}, maxWidth: 400}}
                value={PersonStore.lastname}
                onChange={(event) => PersonStore.setLastname(event)}
                variant="outlined"
            />
        </React.Fragment>
    );
});

export default PersonName;