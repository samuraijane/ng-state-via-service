import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gender } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private subject: Subject<Gender> = new Subject<Gender>();

  constructor() { }

  names: Gender = {
    female: 'Anna',
    male: 'Billy'
  }

  public broadcastNameChange(message?: string, isFemale?: boolean) {
    if (!message) {
      this.subject.next(this.names);
    } else {
      this.names = isFemale ? {...this.names, female: message} : {...this.names, male: message};
      this.subject.next(this.names);
    }
  }

  public receiveNameChange() {
    return this.subject.asObservable();
  }

}
