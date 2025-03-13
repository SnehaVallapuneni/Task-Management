import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { UsersService } from './users.service';
import { NewUserComponent } from "./new-user/new-user.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-demo';
 // users=DUMMY_USERS;
 private userService=inject(UsersService)
 users=this.userService.users;
  selectedUserId?:string;
  isAddNewUser=false;
  get selectedUser(){
   return this.users.find((user)=>user.id===this.selectedUserId)!;
  }
  onSelectUser(id: string){
    this.selectedUserId=id;
  }

  onStartAddUser(){
    this.isAddNewUser=true;
    console.log("Clicked")
  }
  closeDialog(){
    this.isAddNewUser=false
  }
}
