import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Items_Details,
  UniqueConstraintError,
} from '../Details';
import { Subscription } from 'rxjs';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit, OnDestroy {
  constructor(private Service: ItemService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Items_Details = {
    Id_No : '',
    Name : '',
    Instock: '',
    ExpDate: '',
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
