import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TripGranularity } from '../enums/trip-granularity.enum';

@Component({
  selector: 'app-trip-editor',
  templateUrl: './trip-editor.component.html',
  styleUrls: ['./trip-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripEditorComponent {
  tripGranularity = TripGranularity;

  editorForm = this.fb.group({
    title: [''],
    granularity: [TripGranularity.WHOLE],
    days: this.fb.array([
      this.emptyTipDay
    ])
  });

  constructor(private fb: FormBuilder) { }

  get isByDayTrip(): boolean {
    return this.editorForm.get('granularity')?.value === TripGranularity.BY_DAY
  }

  addDay(): void {
    this.days.push(this.emptyTipDay);
  }

  get days(): FormArray {
    return this.editorForm.get('days') as FormArray;
  }

  get daysControls(): AbstractControl[] {
    if (this.isByDayTrip) {
      return this.days.controls;
    }
    return [this.days.controls[0]];
  }

  private get emptyTipDay(): FormGroup {
    return this.fb.group({
      description: [''],
      glink: [''],
    })
  }
}
