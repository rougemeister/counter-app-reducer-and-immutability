import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset,incrementBy,undo } from '../../state/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCurrentCount, selectHistory } from '../../state/counter.selector';
import { OptionsComponent } from '../options/options.component';
import { AppState } from '../../app.state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, OptionsComponent, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;
  history$: Observable<number[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCurrentCount);
    this.history$ = this.store.select(selectHistory);

    this.count$.subscribe((count) => {
      localStorage.setItem('count', JSON.stringify(count));
    });
  }

  increment() {
    this.store.dispatch(increment({ amount: 1 }));
  }

  decrement() {
    this.store.dispatch(decrement({ amount: 1 }));
  }

  incrementBy(value: number) {
    this.store.dispatch(incrementBy({ value }));
  }
  
  undo() {
    this.store.dispatch(undo());
  }

  reset() {
    this.store.dispatch(reset());
  }
}