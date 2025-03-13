import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
 // @Output() complete=new EventEmitter<string>();
 // private taskService=Inject(TasksService);

  constructor(private taskService: TasksService) {}


  onCompleteTask(){
   // this.complete.emit(this.task.id);
   this.taskService.removeTask(this.task.id);
  }
}
