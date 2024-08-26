import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset,incrementBy, decrementBy } from '../../state/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../../state/counter.selector';
import { OptionsComponent } from '../options/options.component';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, OptionsComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.count$.subscribe((count) =>
      localStorage.setItem('count', JSON.stringify(count))
    );
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
  


  reset() {
    this.store.dispatch(reset());
  }
}