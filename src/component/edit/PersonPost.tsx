import React from 'react';
import PersonStore from "../../store/person-store";
import {post} from "../../data/data";
import {MenuItem} from "@mui/material";
import TextField from "@mui/material/TextField";
import {observer} from "mobx-react-lite";

const PersonPost = observer(() => {
    return (
        <TextField
            id="post"
            select
            margin="dense"
            label="Должность"
            sx={{width: {xs: "100%"}, maxWidth: 400}}
            value={PersonStore.post}
            onChange={(event) => PersonStore.setPost(event)}
        >
            {post.map((value) => (
                <MenuItem key={value} value={value}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
});

export default PersonPost;