import { Component ,computed,EventEmitter,Input,input, output, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
import { NewUserComponent } from "../new-user/new-user.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, NewUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 /* @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
 @Input({required:true}) name!:string;*/

 /*@Input({required:true}) user!:{
  id:string;
  avatar:string;
  name:string;
 };*/
 @Input({required:true}) user!:User;
 @Input({required:true})selected!:boolean;
 @Output() select=new EventEmitter<string>();
 //avatar=input<string>();
 //avatar=input.required<string>(); //signal inputs
 //name=input.required<string>();

 /*imagePath= computed(()=>{
  return 'assets/users/'+this.avatar();
 })*/
//select=output<string>();
 get imagePath(){
  return 'assets/users/'+this.user.avatar;
 }
 onSelectUser(){
  this.select.emit(this.user.id);
 }
}
