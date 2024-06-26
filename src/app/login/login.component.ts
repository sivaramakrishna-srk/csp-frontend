import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { InsertedSuccess, Read,login, Staff_Details } from '../Details';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private Service: CrudService, private router: Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  a = [];
  Result=[];
  GotResult:boolean=false;

  Id_No: String = '';
  Name: String = '';
  userName: String = '';
  password: String = '';
  Age: Number = 0;
  DOB: String = '';
  Address: String = '';
Log: login = {
   
    UserName: '',
    Password: '',
  
  };

  Read(UserName: String) {
    this.Service.Read(UserName).subscribe({
      next: (Data: Read) => {
        this.Result = Data.Result;
        this.GotResult = true;
        if(this.Log.Password==this.Result[0]){
          this.router.navigate(['/menu']);
        }
        else{
          alert('invalid username or pasword')
        }
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
 /* Read() {
    this.userName = this.Log.UserName;
    this.password = this.Log.Password;
    this.Subscription = this.Service.login(this.Log.UserName).subscribe(
      (data: any) => {
        if (data) {
          this.a = data.Result[0];
          this.Log = {
           UserName:this.a[0],
          Password:this.a[1]
    
           
          };
          if (
            this.userName == this.Log.UserName &&
            this.password == this.Log.Password
          ) {
            this.router.navigate(['/menu']);
          } else {
            document.write('failed');
          }
        } else {
          alert("Can't read");
        }
      }
    );
  }*/



}
