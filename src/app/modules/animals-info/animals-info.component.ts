import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from "../list-of-animals/list-of-animals.service";

@Component({
  selector: 'app-animals-info',
  templateUrl: './animals-info.component.html',
  styleUrls: ['./animals-info.component.less']
})
export class AnimalsInfoComponent {
  @Input() animal = <Animal>{};
  @Output() changeColor = new EventEmitter<boolean>();
  isActive = false;

  nextColor() {
    this.isActive = !this.isActive;
    this.changeColor.emit(this.isActive);
  }
}
