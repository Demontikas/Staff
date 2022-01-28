import {makeAutoObservable} from "mobx";
import {IPerson} from "../types/types";

class PersonListStore {
    staff: IPerson[] = JSON.parse(localStorage.getItem("staff") || "[]");
    currentPerson: IPerson = {} as IPerson;
    constructor() {
        makeAutoObservable(this);
    }
    addCurrentPersonID(id: number) {
        const person = this.staff.find(person => person.id === id);
        if (person) {
            this.currentPerson = person;
        }
    }
    addCurrentPerson(person: IPerson) {
        this.currentPerson = person;
    }
    editPerson(person: IPerson) {
        let user = this.staff.find(user => user.id === person.id)
        if(user) {
            user.surname = person.surname;
            user.name = person.name;
            user.lastname = person.lastname;
            user.photo = person.photo;
            user.birthday = person.birthday;
            user.gender = person.gender;
            user.post = person.post;
            user.work = person.work;
        } else {
            this.addPerson(person)
        }
        localStorage.setItem('staff', JSON.stringify(this.staff));
    }
    addPerson(person: IPerson) {
        this.staff.push(person);
    }
    deletePerson(id: number) {
        this.staff = this.staff.filter(person => person.id !== id);
        localStorage.setItem('staff', JSON.stringify(this.staff));
    }
}
export default new PersonListStore();