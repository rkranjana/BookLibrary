import { Injectable } from '@angular/core';
import { ApplicationInsights, Util } from '@microsoft/applicationinsights-web';
import { environment } from 'src/environments/environment';


@Injectable()
export class AppMonitoringService{
  appInsights:ApplicationInsights;
  constructor(){
    this.appInsights = new ApplicationInsights({
      config:{
        instrumentationKey: environment.appInsights.instrumentationKey,
        enableAutoRouteTracking:true
      }
    });
    this.appInsights.loadAppInsights();
  }

  logPageView(name?:string,uri?:string){
    this.appInsights.trackPageView({
      name:name,
      uri:uri
    });
  }

  logEvent(name:string,properties?:{[key:string]:any}){
    this.appInsights.trackEvent({name:name},properties);
  }

  logMetrics(name:string,average:number,properties?:{[key:string]:any}){
    this.appInsights.trackMetric({name:name,average:average},properties);
  }

  logException(exception:Error,severityLevel?:number){
    this.appInsights.trackException({exception:exception,severityLevel:severityLevel});
  }

  logTrace(message:string,properties?:{[key:string]:any}){
    this.appInsights.trackTrace({message:message},properties);
  }
}