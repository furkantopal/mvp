import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryPayload } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): QueryPayload {
    return this.appService.getInfo();
  }
}
