import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private subject: Subject<string> = new Subject<string>();

  constructor() { }

  public alert(message: string) {
    alert(message);
  }

}
