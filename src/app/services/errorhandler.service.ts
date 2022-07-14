import { Injectable,ErrorHandler } from '@angular/core';
import { AppMonitoringService } from './loggingservice.service';

@Injectable()
export class ErrorHandlerService extends ErrorHandler{
  constructor(private azAppInsightService:AppMonitoringService){
    super();
  }

  override handleError(error: any): void {
    this.azAppInsightService.logException(error);
  }
}
