import { Component } from '@angular/core';
import { ApiclientService } from './services/apiclient.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private apiClientService: ApiclientService) {}
}
