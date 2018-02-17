import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = '';
  button = true;

  disabledButton() {
    if (this.userName.length > 0) {
      return false;
    }
    else {
      return true;
    }
  }
  userNameClicked() {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}

