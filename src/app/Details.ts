export interface Staff_Details {
  Id_No: string;
  Name: string;
  UserName: string;
  Password: string;
  Age: Number;
  DOB : string;
  Address: string;
}
export interface Mothers_Details {
  Id_No: String;
  Name: String;
  Age: Number;
  DOB : String;
  Aadhar_no: Number;
  Address: String;
}
export interface Childrens_Details {
  Id_No: String;
  Name: String;
  Age: Number;
  DOB : String;
  Mothers_name: String;
  Parents_mobile: Number;
  Address: String;
}
export interface Items_Details {
  Id_No: String;
  Name: String;
  Instock: String;
  ExpDate: String;
}
export interface UniqueConstraintError {
  errorNum: Number;
  offset: Number;
}
export interface InsertedSuccess {
  lastRowid: String;
  rowsAffected: Number;
}
export interface Read {
  Result: [];
}
export interface login{
  UserName:string;
  Password:string;
}
