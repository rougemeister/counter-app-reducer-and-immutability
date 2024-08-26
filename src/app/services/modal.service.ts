import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showCounterModalSubject = new BehaviorSubject<boolean>(false);
  private showIntervalModalSubject = new BehaviorSubject<boolean>(false);

  showCounterModal$ = this.showCounterModalSubject.asObservable();
  showIntervalModal$ = this.showIntervalModalSubject.asObservable();

  openCounterModal() {
    this.showCounterModalSubject.next(true);
  }

  closeCounterModal() {
    this.showCounterModalSubject.next(false);
  }

  openIntervalModal() {
    this.showIntervalModalSubject.next(true);
  }

  closeIntervalModal() {
    this.showIntervalModalSubject.next(false);
  }
}
