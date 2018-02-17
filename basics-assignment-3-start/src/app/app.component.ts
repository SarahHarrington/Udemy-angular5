import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  clicks = [];

  display() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push('click');
  }

  backgroundColor() {
    if (this.clicks[i] > 5)
      return 'lightblue';
  }
}
