import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fiwe';

  onActivate(event) {
    window.scroll(0,0);

  }
}
