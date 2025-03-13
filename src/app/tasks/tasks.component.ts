import { Component ,Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

@Input({required:true}) name!:string;
@Input({required:true}) userId!:string;
isAddingTask=false;
// @Input()name?:string;
 //private taskService=new TasksService();
 constructor(private taskService:TasksService){

 }
 get selectedUserTasks(){
return this.taskService.getUserTasks(this.userId) 
}

 onCompleteTask(id:string){
  return this.taskService.removeTask(id);
 }

 onStartAddTask(){
  this.isAddingTask=true;
 }
 onCloseAddTask(){
  this.isAddingTask=false
 }
 /*onAddTask(taskData:NewTaskData){
  return this.taskService.AddTask(taskData,this.userId);
  this.isAddingTask=true;
 }*/
//@Input() name?:string; instead of question mark we can also use name:tsirng|undefined
//the question mark tells the typescript that some values may not be defined
}
