import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // here in the brackets we can define the routes; for now it is set as default '/'
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // defines what is executed whe GET request is sent
  getHello(): string {
    return this.appService.getHello();
  }
}
