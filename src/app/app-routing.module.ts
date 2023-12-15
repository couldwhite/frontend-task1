import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditAnimalsComponent} from "./modules/edit-animals/edit-animals.component";
import {ListOfAnimalsComponent} from "./modules/list-of-animals/list-of-animals.component";

const routes: Routes = [
  {path: 'pet/:id', component: EditAnimalsComponent},
  {path: '', component: ListOfAnimalsComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
