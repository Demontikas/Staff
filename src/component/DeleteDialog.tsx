import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {observer} from "mobx-react-lite";
import DeleteDialogStore from "../store/delete-dialog-store"
import PersonListStore from "../store/person-list-store"
import { useNavigate } from "react-router-dom";

const DeleteDialog = observer(() => {
    const navigate = useNavigate();
    const removePerson = () => {
        DeleteDialogStore.close();
        PersonListStore.deletePerson(PersonListStore.currentPerson.id);
        navigate("/", {replace: true});
    }
    console.log("question")
    return (
        <div>
            <Dialog
                open={DeleteDialogStore.state}
                onClose={() => DeleteDialogStore.close()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Удаление"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Будет удален сотрудник: ${PersonListStore.currentPerson.surname} ${PersonListStore.currentPerson.name}.`}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Вы действительно хотите удалить данного сотрудника?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => DeleteDialogStore.close()}>Нет</Button>
                    <Button variant="contained" onClick={removePerson} autoFocus>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})
export default DeleteDialog;