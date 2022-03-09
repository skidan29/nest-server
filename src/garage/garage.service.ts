import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class GaragesService {
  public client = new MongoClient(
    'mongodb+srv://Skidan_1306:Skidan_1306@cluster0.f8mq5.mongodb.net/test?retryWrites=true&w=majority',
  );

  public async getGarages() {
    try {
      await this.client.connect();

      const collection = await this.client.db('test').collection('garages');
      return await collection.find().toArray();
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }

  public async postGarages(newObject) {
    try {
      await this.client.connect();

      const collection = await this.client.db('test').collection('garages');
      await collection.insertOne(newObject);
      console.log('подключено');
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }
}
