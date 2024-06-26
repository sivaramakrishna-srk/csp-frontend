import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Staff_Details,
  UniqueConstraintError,
} from '../Details';
import { Subscription } from 'rxjs';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(private Service: CrudService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Staff_Details = {
    Id_No : '',
    Name : '',
    UserName: '',
    Password: '',
    Age: 0,
    DOB: '',
    Address: ''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.Id_No} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.Id_No} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}