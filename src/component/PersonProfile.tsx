import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PersonListStore from "../store/person-list-store";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Img = styled('img')(({ theme }) => ({
    margin: '10px',
    display: 'block',
    width: '250px',
    maxHeight: '100%',
    [theme.breakpoints.down('tablet')]: {
        width: '200px',
    }
}));

const PersonProfile = observer(() => {
    const params = useParams();
    let person = PersonListStore.currentPerson;
    useEffect(() => {
        if(params.id) PersonListStore.addCurrentPersonID(+params.id);
    }, [])
    return (
        <Container maxWidth="lg">
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 sx={{flexDirection: { xs: 'column', tablet: 'row' }, alignItems: {xs: 'center', tablet: 'flex-start'}, m: 2}}>
                <Img alt="photo" src={person.photo} />
                <div>
                    <Typography variant="h4" color="text.secondary" component="div">
                        {`${person.surname} ${person.name} ${person.lastname}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        <b>дата рождения: </b>
                        {
                            person.birthday
                            ?
                                new Date(person.birthday).toLocaleString('ru', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            : ""
                        }
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        <b>пол: </b>
                        {person.gender}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        <b>должность: </b>
                        {person.post}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div">
                        <b>занятость: </b>
                        {person.work}
                    </Typography>
                </div>
            </Box>
        </Container>
    );
});

export default PersonProfile;