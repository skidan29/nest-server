import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class PremisesService {
  public client = new MongoClient(
    'mongodb+srv://Skidan_1306:Skidan_1306@cluster0.f8mq5.mongodb.net/test?retryWrites=true&w=majority',
  );

  public async getPremises() {
    try {
      await this.client.connect();
      const flats = await this.client.db('test').collection('flats');
      const garages = await this.client.db('test').collection('garages');
      const offices = await this.client.db('test').collection('offices');

      return await offices.find().toArray();
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }
}
