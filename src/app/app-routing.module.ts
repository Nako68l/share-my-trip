import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripEditorModule} from "./trip-editor/trip-editor.module";
import {TripEditorComponent} from "./trip-editor/trip-editor.component";

const routes: Routes = [
  {
    path: '',
    component: TripEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
