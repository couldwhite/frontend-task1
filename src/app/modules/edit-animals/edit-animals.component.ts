import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import {Animal} from "../list-of-animals/list-of-animals.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-edit-animals',
  templateUrl: './edit-animals.component.html',
  styleUrls: ['./edit-animals.component.less']
})
export class EditAnimalsComponent {

  private subscription: Subscription;
  formModel: FormGroup;
  animal: Animal = <Animal>{};
  id: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private http: HttpService) {
    this.id = '';
    this.subscription = activateRoute.params.subscribe(
      (params) => (this.id = params['id'])
    )
    this.formModel = new FormGroup({
      kind: new FormControl(this.animal ? this.animal.kind : '', [
        Validators.required, Validators.pattern('[а-я]{2,10}')
      ]),
      nickname: new FormControl(this.animal ? this.animal.nickname : '', [
        Validators.required, Validators.pattern('^[А-Я][А-Яа-я ]{1,15}')
      ]),
      gender: new FormControl(this.animal ? this.animal.gender : '', [
        Validators.required, Validators.pattern('[мж]{1}')
      ]),
      age: new FormControl(this.animal ? this.animal.age : '', [
        Validators.required, Validators.pattern('^[1-9]$|^[1-3][0-9]$')
      ]),
      typeOfFood: new FormControl(this.animal ? this.animal.typeOfFood : '', Validators.pattern('[а-я]{5,13}'))
    });
  }

  goHome() {
    this.router.navigate(['']);
  }

  editAnimal() {
    if(this.animal && this.id) {
      this.animal.kind = this.formModel.value['kind'];
      this.animal.nickname = this.formModel.value['nickname'];
      this.animal.gender = this.formModel.value['gender'];
      this.animal.age = this.formModel.value['age'];
      this.animal.typeOfFood = this.formModel.value['typeOfFood'];
      this.http.editAnimal(this.animal, this.id).subscribe((animal: any) => this.animal = animal);
    }
  }
}
