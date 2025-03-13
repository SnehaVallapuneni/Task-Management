import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  @Output() close=new EventEmitter<void>()
//@Output() add=new EventEmitter<NewTaskData>();
//@Input({required:true}) userId!:string;
enteredName='';
enteredId='';
enteredavatar='';


private userService=inject(UsersService)
  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.userService.addUser({
      name:this.enteredName,
      id:this.enteredId,
      avatar:this.enteredavatar
    }
  );
  this.close.emit();
  }
}
