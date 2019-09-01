import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { CustomNGXLoggerService, NGXLogger, NgxLoggerLevel } from 'ngx-logger';

@Injectable()
export class ErrorHandlerService {
  Logger: NGXLogger;
  constructor(private loggerService: CustomNGXLoggerService) {
    this.Logger = this.loggerService.create({ level: NgxLoggerLevel.ERROR });
  }
  handleError<T>(error: any) {
    console.log('error handler service ',error);
    return throwError(error.error || 'Server Error');
  }
}
