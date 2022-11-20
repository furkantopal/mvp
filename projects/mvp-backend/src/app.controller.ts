import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryPayload } from '@ft/mvp-shared-data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): QueryPayload {
    return this.appService.getInfo();
  }
}
