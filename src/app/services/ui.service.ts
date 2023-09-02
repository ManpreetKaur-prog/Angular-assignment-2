import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddForm: boolean =false;
  private subject=new Subject<any> ();

  constructor() { }
  displayForm(): void
  {
      this.ShowAddForm= !this.ShowAddForm;
      this.subject.next(this.ShowAddForm);
  }
  onDisplay(): Observable<any>
  {
    return this.subject.asObservable();
  } 
}
