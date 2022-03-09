import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class FlatsService {
  public client = new MongoClient(
    'mongodb+srv://Skidan_1306:Skidan_1306@cluster0.f8mq5.mongodb.net/test?retryWrites=true&w=majority',
  );

  public async getFlats() {
    try {
      await this.client.connect();

      const collection = await this.client.db('test').collection('flats');
      return await collection.find().toArray();
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }

  public async postFlats(newObject) {
    try {
      await this.client.connect();

      const collection = await this.client.db('test').collection('flats');
      await collection.insertOne(newObject);
      console.log('подключено');
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }
}
