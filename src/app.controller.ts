import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '<h1>Hello</h1>';
  }
  @Get('/test')
  getWorld(): string {
    return JSON.stringify('test');
  }
}
