import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IpComponent } from './ip/ip.component';
import { FeeComponent } from './fee/fee.component';
import { ForstudentComponent } from './forstudent/forstudent.component';
import { ForemployeeComponent } from './foremployee/foremployee.component';
import { MissionComponent } from './mission/mission.component';
import { TransportComponent } from './transport/transport.component';
import { RulesComponent } from './rules/rules.component';
import { RequirementsComponent } from './requirements/requirements.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'photogallery',component:PhotogalleryComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'ip',component:IpComponent},
  {path:'fee',component:FeeComponent},
  {path:'forstudent',component:ForstudentComponent},
  {path:'foremployee',component:ForemployeeComponent},
  {path:'mission',component:MissionComponent},
  {path:'transport',component:TransportComponent},
  {path:'rules',component:RulesComponent},
  {path:'requirement',component:RequirementsComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
