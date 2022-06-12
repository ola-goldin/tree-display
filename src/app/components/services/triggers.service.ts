import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggersService {
  cancelOperation = new BehaviorSubject<boolean>(false);
  
  constructor() { }
}
