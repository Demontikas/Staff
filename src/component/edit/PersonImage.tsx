import React from 'react';
import ButtonBase from "@mui/material/ButtonBase";
import {styled} from "@mui/material/styles";
import PersonStore from "../../store/person-store";
import {observer} from "mobx-react-lite";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const Input = styled('input')({
    display: 'none',
});

const PersonImage = observer(() => {
    console.log("image")
    return (
        <label htmlFor="contained-button-file" style={{textAlign: "center"}}>
            <Input accept="image/*" id="contained-button-file"
                   type="file"
                   onChange={(event) => PersonStore.setPhoto(event)}
            />
            <ButtonBase sx={{width: { xs: 150, sm: 230 }, m: 1, height: "100%"}} component="span">
                <Img alt="photo" src={PersonStore.photo} />
            </ButtonBase>
        </label>
    );
});

export default PersonImage;