import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  constructor() { }

  DataVisible = new BehaviorSubject(true);
  
}
