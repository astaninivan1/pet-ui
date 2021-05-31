import { Component } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public appService: AppService) {
    this.appService.isLoading = true;
    setTimeout(() => this.appService.isLoading = false, 2000);
  }
}
