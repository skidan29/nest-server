import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaragesController } from './garages/garages.controller';
import { GaragesService } from './garages/garages.service';
import { FlatsController } from './flats/flats.controller';
import { FlatsService } from './flats/flats.service';
import { OfficesController } from './offices/offices.controller';
import { OfficesService } from './offices/offices.service';
import { PremisesController } from './premises/premises.controller';
import { PremisesService } from './premises/premises.service';

@Module({
  imports: [],
  controllers: [AppController, GaragesController, FlatsController, OfficesController, PremisesController],
  providers: [AppService, GaragesService, FlatsService, OfficesService, PremisesService],
})
export class AppModule {}
