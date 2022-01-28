import {makeAutoObservable} from "mobx";

class EditDialogStore {
    state: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
    open() {
        this.state = true;
    }
    close() {
        this.state = false;
    }
}
export default new EditDialogStore();