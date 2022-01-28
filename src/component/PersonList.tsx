import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import PersonCard from "./card/PersonCard";
import PersonListStore from "../store/person-list-store";
import {observer} from "mobx-react-lite";

const PersonList = observer(() => {
    return (
        <Container maxWidth="lg">
            <Typography component="div" variant="h3" align="center" sx={{m: "15px"}}>
                Наши профессионалы
            </Typography>
            {
                PersonListStore.staff.length
                    ?
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, laptop: 8 }}>
                            {
                                PersonListStore.staff.map((person, index) => (
                                    <Grid item xs={4} sm={4} md={4} key={person.id} >
                                        <PersonCard user={person}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    :   <div>
                            <Typography variant="h5" component="h3" align="center">
                                Данных нет.
                            </Typography>
                            <Typography component="p" align="center">
                                Но Вы всегда можете добавить новых
                            </Typography>
                        </div>
            }
        </Container>
    );
});

export default PersonList;