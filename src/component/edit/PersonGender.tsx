import React from 'react';
import {FormControl, FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import PersonStore from "../../store/person-store";
import {gender} from "../../data/data";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {observer} from "mobx-react-lite";

const PersonGender = observer(() => {
    return (
        <FormControl sx={{width: {xs: "100%"}, maxWidth: 400}}>
            <FormLabel id="row-radio-buttons-group-label">Пол</FormLabel>
            <RadioGroup
                row
                defaultValue="female"
                aria-labelledby="row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={PersonStore.gender}
                onChange={(event) => PersonStore.setGender(event)}
            >
                {
                    gender.map((item, index) => {
                        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                    })
                }
            </RadioGroup>
        </FormControl>
    );
});

export default PersonGender;