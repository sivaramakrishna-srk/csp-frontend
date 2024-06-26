import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChildrenComponent } from './children/children.component';
import { ContactComponent } from './contact/contact.component';
import { RegformComponent } from './regform/regform.component';
import { StaffComponent } from './staff/staff.component';
import { ItemComponent } from './item/item.component';
import { MothersinfoComponent } from './mothersinfo/mothersinfo.component';
import { ChildinfoComponent } from './childinfo/childinfo.component';
import { IteminfoComponent } from './iteminfo/iteminfo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, outlet:'primary' },
  { path: 'signup', component: SignupComponent, outlet:'primary' },
  { path: '', component: HomeComponent, outlet:'primary' },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'aboutus', component: AboutusComponent, outlet: 'second' },
      { path: 'children', component: ChildrenComponent, outlet: 'second' },
      { path: 'contact', component: ContactComponent, outlet: 'second' },
      { path: 'regform', component: RegformComponent, outlet: 'second' },
      { path: 'staff', component: StaffComponent, outlet: 'second' },
      { path: 'item', component: ItemComponent, outlet: 'second' },
      { path: 'mothersinfo', component: MothersinfoComponent, outlet: 'second' },
      { path: 'childinfo', component: ChildinfoComponent, outlet: 'second' },
      { path: 'iteminfo', component: IteminfoComponent, outlet: 'second' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatToolbarModule],
})
export class AppRoutingModule {}
