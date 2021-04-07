import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripEditorComponent} from './trip-editor.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [TripEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule
  ]
})
export class TripEditorModule {
}
