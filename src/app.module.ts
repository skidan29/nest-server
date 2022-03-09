import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GarageController } from './garage/garage.controller';
import { GaragesService } from './garage/garage.service';

@Module({
  imports: [],
  controllers: [AppController, GarageController],
  providers: [AppService, GaragesService],
})
export class AppModule {}
