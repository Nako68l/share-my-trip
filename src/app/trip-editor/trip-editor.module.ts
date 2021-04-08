import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripEditorComponent} from './trip-editor.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [TripEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class TripEditorModule {
}
