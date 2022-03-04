import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '<h1>Nest API</h1>';
  }

  @Get('/test')
  getWorld(): string {
    return JSON.stringify('test');
  }
}
