import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [DashboardComponent, AddTodoComponent, TodoComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
