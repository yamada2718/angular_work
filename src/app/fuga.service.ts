import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FugaService {
  condition!: BehaviorSubject<string>;

  constructor() { }

  getCondition(): string {
    return this.condition.getValue();
  }
}
