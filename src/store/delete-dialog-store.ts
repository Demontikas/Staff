import {makeAutoObservable} from "mobx";

class DeleteDialogStore {
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
export default new DeleteDialogStore();