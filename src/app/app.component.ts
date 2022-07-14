import { Component } from '@angular/core';
import { AppMonitoringService } from './services/loggingservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookLibrary';
  constructor(private azAppInsightService:AppMonitoringService){
    
  }
}
