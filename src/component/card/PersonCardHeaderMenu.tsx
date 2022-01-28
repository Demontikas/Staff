import React from 'react';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonListStore from "../../store/person-list-store";
import DeleteDialogStore from "../../store/delete-dialog-store";
import PersonStore from "../../store/person-store";
import EditDialogStore from "../../store/edit-dialog-store";
import {IUser} from "../../types/types";

const PersonCardHeaderMenu: React.FC<IUser> = ({user}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDelete = () => {
        setAnchorEl(null);
        PersonListStore.addCurrentPerson(user);
        DeleteDialogStore.open();
    }
    const handleEdit = () => {
        setAnchorEl(null);
        PersonStore.setPersonObj(user);
        EditDialogStore.open();
    }
    return (
        <React.Fragment>
            <IconButton aria-label="settings"
                        onClick={handleMenu}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={handleEdit} >
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Редактировать</Typography>
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Удалить</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default PersonCardHeaderMenu;