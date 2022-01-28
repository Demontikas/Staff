import React from 'react';
import Typography from "@mui/material/Typography";
import {CardContent} from "@mui/material";
import {IUser} from "../../types/types";

const PersonCardContent: React.FC<IUser> = ({user}) => {
    return (
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>должность: </b>
                {user.post}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>занятость: </b>
                {user.work}
            </Typography>
        </CardContent>
    );
};

export default PersonCardContent;