import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Mothers_Details,
  UniqueConstraintError,
} from '../Details';
import { Subscription } from 'rxjs';
import { MotherService } from '../mother.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit, OnDestroy {
  constructor(private Service: MotherService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Mothers_Details = {
    Id_No : '',
    Name : '',
    Age: 0,
    DOB: '',
    Aadhar_no: 0,
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
