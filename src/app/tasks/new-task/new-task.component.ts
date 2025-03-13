import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() close=new EventEmitter<void>()
//@Output() add=new EventEmitter<NewTaskData>();
@Input({required:true}) userId!:string;
enteredTitle='';
enteredSummary='';
enteredDate='';

constructor(private taskService: TasksService) {}
  onCancel(){
    this.close.emit()
  }

  onSubmit(){
  /*  this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });*/
    this.taskService.AddTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId
  );
  this.close.emit();
  }
}
