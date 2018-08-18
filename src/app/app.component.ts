import { Component } from '@angular/core';
import { EnvironmentService } from '@app/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiUrl = '';

  constructor(environment: EnvironmentService) {
    this.apiUrl = environment.apiUrl;
  }
}
