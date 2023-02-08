import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModalComponent } from '../../../shared/components/shared-modal/shared-modal.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @ViewChild('modal') private modalComponent: SharedModalComponent;

  public addTodo = new FormGroup({
    todoTitle: new FormControl('', [Validators.required]),
    todoDescription: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  public openModal(): void {
    return this.modalComponent.open();
  }

  public onSubmitAddTodoForm(): void {
    console.log(this.addTodo);
  }

  public onClose(): void {
    this.addTodo.reset();
  }
}
