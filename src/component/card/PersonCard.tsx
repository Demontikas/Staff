import React from 'react';
import {Box, Card, CardActions, CardHeader, CardMedia} from "@mui/material";
import Button from "@mui/material/Button";
import PersonListStore from "../../store/person-list-store";
import {IUser} from "../../types/types";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import PersonCardHeaderMenu from "./PersonCardHeaderMenu";
import PersonCardContent from "./PersonCardContent";

const PersonCard: React.FC<IUser> = observer(({user}) => {
    return (
        <Card sx={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                maxWidth: 550,
                m: "auto",
                backgroundColor: "#F8F8FF"
            }
        }>
            <CardHeader
                sx={{width: "100%"}}
                action={<PersonCardHeaderMenu user={user}/>}
                titleTypographyProps={{variant:'h6' }}
                title={`${user.surname} ${user.name} ${user.lastname}`}
            />
            <Box display="flex" width="100%" sx={{ flexDirection: {xs: 'column', mobile: 'row'},
                alignItems: {xs: 'center', mobile: 'strench'}}}>
                <CardMedia component="img"
                           sx={{ width: 150, height: 150, objectFit: 'contain' }}
                           image={user.photo}
                           alt="photo"
                />
                <Box display="flex" flexDirection="column" width="100%">
                    <PersonCardContent user={user} />
                    <CardActions sx={{alignSelf: 'flex-end'}}>
                        <Button variant="contained"
                                size="medium"
                                onClick={() => PersonListStore.addCurrentPerson(user)}
                                component={Link}
                                to={String(user.id)}>
                            Подробнее
                        </Button>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
});

export default PersonCard;