import {Injectable, OnInit} from "@angular/core";
import {HttpService} from "../http.service";

export class Animal {
  id: string;
  kind: string;
  nickname: string;
  age: number;
  gender: "м" | "ж";
  typeOfFood: string;

  constructor(_id:string, _kind:string, _nickname: string, _age: number, _gender: "м" | "ж", _typeOfFood: string) {
    this.id = _id;
    this.kind = _kind;
    this.nickname = _nickname;
    this.age = _age;
    this.gender = _gender;
    this.typeOfFood = _typeOfFood;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsService implements OnInit {

  animals: Animal[] = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getAnimals().subscribe((animal: any) => this.animals = animal["animals"]);
  }
}
