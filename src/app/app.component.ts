import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ModalService } from './services/modal.service';
import { Store } from '@ngrx/store';
import { setCounter,incrementBy } from './state/counter.actions';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'ngrx-counter-app';
  showCounterModal = false;
  showIntervalModal = false;
  inputValue: number = 0;
  inputInterval:number = 0;
  currentIncrement!: number;

  constructor(private store: Store, private modalService: ModalService) {}

  updateCounter() {
    this.store.dispatch(setCounter({ value: this.inputValue }));
    this.closeCounterModal();
  }

  updateInterval() {
    this.currentIncrement = this.inputInterval;  // Reset the current increment to the interval
    this.store.dispatch(incrementBy({ value: this.currentIncrement }));
    this.closeIntervalModal();
  }



  ngOnInit(): void {
    this.modalService.showCounterModal$.subscribe(show => {
      this.showCounterModal = show;
    });

    this.modalService.showIntervalModal$.subscribe(show => {
      this.showIntervalModal = show;
    });
  }

  closeCounterModal() {
    this.modalService.closeCounterModal();
  }

  closeIntervalModal() {
    this.modalService.closeIntervalModal();
  }

}
