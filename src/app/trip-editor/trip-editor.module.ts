import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripEditorComponent } from './trip-editor.component';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [TripEditorComponent],
  imports: [
    CommonModule,
    MatInputModule,
  ]
})
export class TripEditorModule { }
