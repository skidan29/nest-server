import { Controller, Get, Post, Req } from '@nestjs/common';
import { GaragesService } from './garages.service';

@Controller('api')
export class GaragesController {
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
