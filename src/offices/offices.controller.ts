import { Controller, Get, Post, Req } from '@nestjs/common';
import { OfficesService } from './offices.service';

@Controller('api')
export class OfficesController {
  constructor(private officesService: OfficesService) {}
  @Get('/offices')
  getGarages() {
    return this.officesService.getOffices();
  }

  @Post('/offices')
  postGarages(@Req() req) {
    this.officesService.postOffices(req.body);
  }
}
