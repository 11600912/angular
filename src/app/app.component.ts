import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: [`./app.component.css`]

})
export class AppComponent {
  public title={
    textAlign:"center",
    color:"black",
    fontFamily:"verdana",
    margin:"5px",
    padding:"3px"
  }
}
