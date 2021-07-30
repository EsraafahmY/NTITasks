import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
<<<<<<< HEAD

=======
>>>>>>> 9b1be1b6135823252bb40f464c106e4e71de0b61
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  UserData:any = {
    nam:"",
=======
  emailUsedBefore = false
  userData:any = {
    name:"",
>>>>>>> 9b1be1b6135823252bb40f464c106e4e71de0b61
    password:"",
    dateOfBirth:"",
    email:"",
    gender:1,
    phone:"",
    role:1
<<<<<<< HEAD
  }

  constructor(private _user:UserService) {

   }

  ngOnInit(): void {
  }

  handleRegister(userData:any){
    console.log(userData.value)
    this._user.register(this.UserData).subscribe(res=>{
      console.log(userData);
    });
  }
  reset(e:Event , reg:NgForm){
=======
  }
  constructor(private _user:UserService) { }
  ngOnInit(): void { }
  handleRegister(register:NgForm){
    if(register.valid){
      console.log(this.userData)
      this._user.register(this.userData).subscribe(res=>{
        if(res.error.email) this.emailUsedBefore=true
        console.log(res)
      })
      register.resetForm()  
    }
  }
  reset(e:Event, reg:NgForm){
    // e.preventDefault()
>>>>>>> 9b1be1b6135823252bb40f464c106e4e71de0b61
    reg.resetForm()
  }
}
