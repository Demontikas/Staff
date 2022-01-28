import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditDialogStore from "../store/edit-dialog-store";
import {observer} from "mobx-react-lite";
import PersonDialogContent from "./edit/PersonContent"
import PersonListStore from "../store/person-list-store";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonStore from "../store/person-store";
import { useTheme } from '@mui/material/styles';

const PersonEditDialog = observer(() => {
    const savePerson = () => {
        EditDialogStore.close();
        PersonListStore.editPerson(PersonStore.getPerson());
    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog fullScreen={fullScreen} open={EditDialogStore.state} onClose={() => EditDialogStore.close()}>
            <DialogTitle>Редактирование...</DialogTitle>
            <DialogContent>
                <PersonDialogContent />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => EditDialogStore.close()}>Отмена</Button>
                <Button variant="contained" onClick={savePerson}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
});

export default PersonEditDialog;