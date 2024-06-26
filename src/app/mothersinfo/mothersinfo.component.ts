import { Component, OnInit } from '@angular/core';
import { InsertedSuccess, Read, Mothers_Details } from '../Details';
import { MotherService } from '../mother.service';

@Component({
  selector: 'app-mothersinfo',
  templateUrl: './mothersinfo.component.html',
  styleUrls: ['./mothersinfo.component.css']
})


export class MothersinfoComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: MotherService) {}
  Id_No: String = '';
  GotResult: Boolean = false;
  UpdatedUser: Mothers_Details = {
    Id_No: '',
    Name: '',
    Age: 0,
    DOB: '',
    Aadhar_no: 0,
    Address: ''
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
          this.UpdatedUser.Age= this.a[2];
          this.UpdatedUser.DOB= this.a[3];
          this.UpdatedUser.Aadhar_no= this.a[4];
          this.UpdatedUser.Address= this.a[5];
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(Id_No: String, Details: Mothers_Details) {
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