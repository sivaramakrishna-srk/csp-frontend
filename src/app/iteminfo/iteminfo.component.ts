import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { InsertedSuccess, Read, Items_Details } from '../Details';


@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.component.html',
  styleUrls: ['./iteminfo.component.css']
})


export class IteminfoComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: ItemService) {}
  Id_No: String = '';
  GotResult: Boolean = false;
  UpdatedUser: Items_Details = {
    Id_No: '',
    Name: '',
    Instock: '',
    ExpDate: ''
  };
  Results = [];
  Data=[];
  a=[];
  Read(Id_No: String) {
    this.Service.Read(Id_No).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }

  Read1(Id_No: String) {
    this.Service.Read(Id_No).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
        console.log(this.Results[0]);
        this.a=this.Results[0]
        
          this.UpdatedUser.Id_No= this.a[0];
          this.UpdatedUser.Name=this.a[1];
          this.UpdatedUser.Instock= this.a[2];
          this.UpdatedUser.ExpDate= this.a[3];
        
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }

  Update(Id_No: String, Details: Items_Details) {
    this.Service.Update(this.UpdatedUser.Id_No, Details).subscribe({
      next: (Data) => {
        console.log(Data);
      },
      error: (err) => {
        console.log(err);
        this.Read('All');
      },
    });
  }
  Delete(Id_No: String) {
    this.Service.Delete(Id_No).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
      },
      error: (Error) => {
        console.log(Error);
        this.Read('All');
      },
    });
  }
}