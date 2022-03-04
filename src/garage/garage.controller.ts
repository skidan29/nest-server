import {
  Controller,
  Get,

} from "@nestjs/common";

@Controller('api')
export class GarageController {

  @Get('/garages')
  getWorld(): string {
    return JSON.stringify({ number: 1231, name: 'OB2' });

  }
}
