import React from 'react';
import {Box} from "@mui/material";
import PersonImage from "./PersonImage";
import PersonBirthday from "./PersonBirthday";
import PersonGender from "./PersonGender";
import PersonPost from "./PersonPost";
import PersonWork from "./PersonWork";
import PersonName from "./PersonName";

const PersonContent = () => {
    return (
        <Box
            component="form" sx={{
                display: "flex",
                flexDirection: { xs: 'column', sm: 'row' }

            }}
            noValidate
            autoComplete="off"
        >
            <PersonImage />
            <Box sx={{display: "flex", flexDirection: "column", alignItems: {xs: "center", sm:"stretch"}}}>
                <PersonName />
                <PersonBirthday />
                <PersonGender />
                <PersonPost />
                <PersonWork />
            </Box>
        </Box>
    );
};

export default PersonContent;