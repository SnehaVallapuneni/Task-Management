import { Injectable } from '@angular/core';
import { NewUserData } from './new-user/new-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    users = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
    },
  ];
  isDialogOpen?: boolean;
  constructor() { }

  addUser(userData:NewUserData){
    this.users.unshift({
      name:userData.name,
      id:userData.id,
      avatar:userData.avatar
    })
  }
  openDialog() {
    this.isDialogOpen = true;
  }
  
  closeDialog() {
    this.isDialogOpen = false;
  }
}
