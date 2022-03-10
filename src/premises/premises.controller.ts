import { Controller, Get, Post, Req } from '@nestjs/common';
import { PremisesService } from './premises.service';

@Controller('api')
export class PremisesController {
  constructor(private premisesService: PremisesService) {}

  @Get('/premises')
  getPremises() {
    return this.premisesService.getPremises();
  }

  @Post('/premises')
  postPremises(@Req() req) {
    this.premisesService.postPremises(req.body);
  }
}
