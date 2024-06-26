import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InsertedSuccess, Read,login, Staff_Details } from '../Details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private Service: CrudService, private router: Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  a = [];
  Results=[];
  GotResult:boolean=false;

  UserName: String = '';
  Password: String = '';
Log: login = {
   
    UserName: '',
    Password: '',
  
  };

  Read() {
    
    this.Service.login(this.Log.UserName).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        console.log("after result");
        this.GotResult = true;
        console.log(this.Results[0]);
        this.a=this.Results[0];
        console.log(this.a[3]);
        
        if(this.Log.Password==this.a[3]){
          this.router.navigate(['/menu']);
          console.log("hi");
        }
        else{
          alert('invalid username or pasword');
          console.log("hi");
        }
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
}
