import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GarageController } from './garage/garage.controller';
import { GarageService } from './garage/garage.service';

@Module({
  imports: [],
  controllers: [AppController, GarageController],
  providers: [AppService, GarageService],
})
export class AppModule {}
