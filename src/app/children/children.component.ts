import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Childrens_Details,
  UniqueConstraintError,
} from '../Details';
import { Subscription } from 'rxjs';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})

export class ChildrenComponent implements OnInit, OnDestroy {
  constructor(private Service: ChildService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Childrens_Details = {
    Id_No : '',
    Name : '',
    Age: 0,
    DOB: '',
    Mothers_name:'',
    Parents_mobile:0,
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
