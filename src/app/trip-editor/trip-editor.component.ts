import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TripGranularity} from '../enums/trip-granularity.enum';

@Component({
  selector: 'app-trip-editor',
  templateUrl: './trip-editor.component.html',
  styleUrls: ['./trip-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripEditorComponent{
  tripGranularity = TripGranularity;

  editorForm = this.fb.group({
    title: [''],
    tripGranularity: [TripGranularity.BY_DAY]
  });

  constructor(private fb: FormBuilder) { }
}
