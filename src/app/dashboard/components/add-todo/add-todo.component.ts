import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModalComponent } from '../../../shared/components/shared-modal/shared-modal.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @ViewChild('modal') private modalComponent: SharedModalComponent;

  async openModal() {
    return this.modalComponent.open();
  }

  constructor() {}

  ngOnInit(): void {}
}
