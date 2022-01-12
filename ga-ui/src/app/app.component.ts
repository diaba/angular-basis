import { Component } from '@angular/core';
// Decorator provide by typeScript
@Component({
  selector: 'app-root', // correspond to the html element 
  templateUrl: './app.component.html', // file responsible for the the view
  styleUrls: ['./app.component.css']  // file responsible for the the styles
})
export class AppComponent {
  title = 'ga-ui';
}
