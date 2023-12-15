import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms'

import {ListOfAnimalsComponent} from './list-of-animals/list-of-animals.component';
import {CommonModule} from "@angular/common";
import {AnimalsInfoComponent} from './animals-info/animals-info.component';
import {AnimalsService} from "./list-of-animals/list-of-animals.service";
import {EditAnimalsComponent} from './edit-animals/edit-animals.component';
import {AuthInterceptor, HttpService} from "./http.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    ListOfAnimalsComponent,
    AnimalsInfoComponent,
    EditAnimalsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AnimalsService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [ListOfAnimalsComponent]
})

export class AnimalsModule {}
