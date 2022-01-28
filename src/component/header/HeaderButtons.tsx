import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PersonListStore from "../../store/person-list-store";
import EditDialogStore from "../../store/edit-dialog-store";
import { useLocation, useParams } from "react-router-dom";
import DeleteDialogStore from "../../store/delete-dialog-store";
import PersonStore from "../../store/person-store";

export default function HeaderButtons() {
    const [profile, setProfile] = useState(false);
    const locate = useLocation();
    const params = useParams();
    useEffect(() => {
        setProfile(!!params.id);
    }, [locate])
    return (
        <div>
            {
                profile
                    ?
                    <React.Fragment>
                        <IconButton
                            onClick={() => {
                                PersonStore.setPersonObj(PersonListStore.currentPerson);
                                EditDialogStore.open();
                            }}
                            size="large"
                            color="inherit"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                DeleteDialogStore.open();
                            }}
                            size="large"
                            color="inherit"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </React.Fragment>
                    :
                    <IconButton
                        onClick={() => {
                            PersonStore.setPersonEmpty();
                            EditDialogStore.open();
                        }}
                        size="large"
                        color="inherit"
                    >
                        <AddIcon />
                    </IconButton>
            }
        </div>
    );
}