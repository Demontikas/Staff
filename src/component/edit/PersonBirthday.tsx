import React from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";
import DatePicker from "@mui/lab/DatePicker";
import PersonStore from "../../store/person-store";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {observer} from "mobx-react-lite";

const PersonBirthday = observer(() => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <div style={{margin: "10px 0", width: "100%", maxWidth: 400}}>
                <DatePicker
                    mask="__.__.____"
                    label="Дата рождения"
                    value={PersonStore.birthday}
                    maxDate={new Date()}
                    onChange={(value) => PersonStore.setBirthday(value)}
                    renderInput={(params) => <TextField sx={{width: "100%"}} {...params} />}
                />
            </div>
        </LocalizationProvider>
    );
});

export default PersonBirthday;