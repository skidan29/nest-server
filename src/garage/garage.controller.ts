import { Controller, Get, Post, Req } from '@nestjs/common';
import { GaragesService } from './garage.service';

@Controller('api')
export class GarageController {
  constructor(private garagesService: GaragesService) {}
  @Get('/garages')
  getGarages() {
    return this.garagesService.getGarages();
  }

  @Post('/garages')
  postGarages(@Req() req) {
    this.garagesService.postGarages(req.body);
  }
}
