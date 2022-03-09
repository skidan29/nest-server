import { Controller, Get, Post, Req } from '@nestjs/common';
import { PremisesService } from './premises.service';

@Controller('api')
export class PremisesController {
  constructor(private premisesService: PremisesService) {}

  @Get('/premises')
  getGarages() {
    return this.premisesService.getPremises();
  }
}
