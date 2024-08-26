import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import {  reset } from '../../state/counter.actions';

@Component({
  selector: 'app-options',
  standalone: true,
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  isSelectionVisible = false;

  constructor(private modalService: ModalService, private store: Store) {}

  showCounterModal() {
    this.modalService.openCounterModal();
  }

  showInterValModal() {
    this.modalService.openIntervalModal();
  }

  toggleSelection() {
    this.isSelectionVisible = !this.isSelectionVisible;
  }

  // Dispatch the reset action to the store
  reset() {
    this.store.dispatch(reset());
  }
}

