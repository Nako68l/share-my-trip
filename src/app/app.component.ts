import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'share-my-trip';
  items$: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items$ = firestore.collection('items').valueChanges();
  }
}
