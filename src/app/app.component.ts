import { Component } from '@angular/core';
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'cover-letter';
}
