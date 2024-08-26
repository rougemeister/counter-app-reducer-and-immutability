import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ModalService } from './services/modal.service';
import { Store } from '@ngrx/store';
import { setCounter,incrementBy } from './state/counter.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, FormsModule, CommonModule],
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
  showButtons = true;
  display: { [key: string]: string } = {
    'display': 'none',
  };
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
    this.showButtons = true;
  }

  closeIntervalModal() {
    this.modalService.closeIntervalModal();
    this.showButtons = false;
  }

}
