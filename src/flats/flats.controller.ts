import { Controller, Get, Post, Req } from '@nestjs/common';
import { FlatsService } from './flats.service';

@Controller('api')
export class FlatsController {
  constructor(private flatsService: FlatsService) {}
  @Get('/flats')
  getFlats() {
    return this.flatsService.getFlats();
  }

  @Post('/flats')
  postFlats(@Req() req) {
    this.flatsService.postFlats(req.body);
  }
}
