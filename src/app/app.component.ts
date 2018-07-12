import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: [`./app.component.css`]

})
export class AppComponent {
  public title={
    color:"blue",
    fontFamily:"verdana",
    margin:"5px",
    padding:"25px 25px",
    textAlign:"center"
}
}
