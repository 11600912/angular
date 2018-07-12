import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForstudentComponent } from './forstudent/forstudent.component';
import { ForemployeeComponent } from './foremployee/foremployee.component';
import { FeeComponent } from './fee/fee.component';
import { IpComponent } from './ip/ip.component';
import { MissionComponent } from './mission/mission.component';
import { RulesComponent } from './rules/rules.component';
import { TransportComponent } from './transport/transport.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ValidateService } from './services/validate.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeloginComponent,
    StudentloginComponent,
    PhotogalleryComponent,
    ContactusComponent,
    ForstudentComponent,
    ForemployeeComponent,
    FeeComponent,
    IpComponent,
    HomeComponent,
    PagenotfoundComponent,
    MissionComponent,
    RulesComponent,
    TransportComponent,
    RequirementsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
