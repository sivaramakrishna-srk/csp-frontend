import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChildrenComponent } from './children/children.component';
import { ContactComponent } from './contact/contact.component';
import { RegformComponent } from './regform/regform.component';
import { StaffComponent } from './staff/staff.component';
import { ItemComponent } from './item/item.component';
import { MothersinfoComponent } from './mothersinfo/mothersinfo.component';
import { ChildinfoComponent } from './childinfo/childinfo.component';
import { IteminfoComponent } from './iteminfo/iteminfo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent, MenuComponent, AboutusComponent, ChildrenComponent, ContactComponent, RegformComponent, StaffComponent, ItemComponent, MothersinfoComponent, ChildinfoComponent, IteminfoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
