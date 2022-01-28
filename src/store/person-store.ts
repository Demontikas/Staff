import {makeAutoObservable} from "mobx";
import {IPerson} from "../types/types";
import {gender, post, work} from "../data/data";
import React from "react";

class PersonStore {
    id: number = -1;
    surname: string  = "";
    name: string  = "";
    lastname: string  = "";
    photo: string = "./images/no_photo.png";
    birthday: Date | null = null;
    gender: string = gender[0];
    post: string = post[0];
    work: string = work[0];

    constructor() {
        makeAutoObservable(this);
    }
    setSurname(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.surname = event.target.value;
    }
    setName(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.name = event.target.value;
    }
    setLastname(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.lastname = event.target.value;
    }
    setBirthday(date: Date | null): void {
        this.birthday = date;
    }
    setGender(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.gender = event.target.value;
    }
    setPost(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.post = event.target.value;
    }
    setWork(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        this.work = event.target.value;
    }
    setPhoto(event: React.ChangeEvent<HTMLInputElement>): void {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            let self = this;
            reader.onload = function(event) {
                self._setSelfPhoto(reader.result as string);
            };
        }
    }
    private _setSelfPhoto(data: string) {
        this.photo = data;
    }
    setPersonObj(person: IPerson): void {
        this.id = person.id;
        this.surname = person.surname;
        this.name = person.name;
        this.lastname = person.lastname;
        this.photo = person.photo;
        this.birthday = person.birthday;
        this.gender = person.gender;
        this.post = person.post;
        this.work = person.work;
    }
    setPersonEmpty(): void {
        this.id = new Date().getTime();
        this.surname  = "";
        this.name  = "";
        this.lastname  = "";
        this.photo = "./images/no_photo.png";
        this.birthday = null;
        this.gender = gender[0];
        this.post = post[0];
        this.work = work[0];
    }
    getPerson(): IPerson {
        return {
            id: this.id,
            surname: this.surname,
            name: this.name,
            lastname: this.lastname,
            photo: this.photo,
            birthday: this.birthday,
            gender: this.gender,
            post: this.post,
            work: this.work
        }
    }
}
export default new PersonStore();