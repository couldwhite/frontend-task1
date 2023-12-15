import {Component, OnInit} from '@angular/core';
import {Animal} from "./list-of-animals.service";
import {Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-list-of-animals',
  templateUrl: './list-of-animals.component.html',
  styleUrls: ['./list-of-animals.component.less'],
  providers: [HttpService]
})
export class ListOfAnimalsComponent implements OnInit {

  animals: Animal[] = [];
  selectedAnimal?: Animal;
  isCatVisible = true;
  isActiveForm = false;
  animalsCopy: any;
  newAnimal: Animal = <Animal>{};
  receivedAnimal?: Animal;

  constructor(private router: Router, private http: HttpService) {}

  ngOnInit() {
    this.http.getAnimals().subscribe((animal: any) => this.animals = animal["animals"]);
    this.animalsCopy = this.animals;
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }

  hideCats() {
    this.isCatVisible = !this.isCatVisible;
    if (!this.isCatVisible) {
      this.http.getCats().subscribe((animal: any) => this.animals = animal);
    } else {
      this.http.getAnimals().subscribe((animal: any) => this.animals = animal["animals"]);
    }
  }

  showForm() {
    this.isActiveForm = !this.isActiveForm;
  }

  isActive?: boolean;

  changeColor($event: boolean) {
    this.isActive = $event;
    this.http.errRequest().subscribe();
  }

  addAnimal() {
    this.http.createAnimal(this.newAnimal).subscribe((animal: any) => this.receivedAnimal = animal);
    this.http.getAnimals().subscribe((animal: any) => this.animals = animal["animals"]);
  }

  goEditAnimal() {
    this.router.navigate(['pet', this.selectedAnimal?.id]);
  }

  deleteAnimal() {
    if(this.selectedAnimal?.id) {
      this.http.deleteAnimal(this.selectedAnimal.id).subscribe();
    }
  }
}
