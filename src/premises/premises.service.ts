import {
  Injectable,
  Post,
  Req
} from "@nestjs/common";
import { MongoClient } from 'mongodb';

@Injectable()
export class PremisesService {
  public client = new MongoClient(
    'mongodb+srv://Skidan_1306:Skidan_1306@cluster0.f8mq5.mongodb.net/test?retryWrites=true&w=majority',
  );

  public async getPremises() {
    try {
      await this.client.connect();
      const flats = await this.client.db('test').collection('flats').find().toArray()
      const f = flats.concat();
      const garages = await this.client.db('test').collection('garages').find().toArray();
      const g = garages.concat();
      const offices = await this.client.db('test').collection('offices').find().toArray();
      const o = offices.concat();
      return [...f, ...g, ...o];
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }

  public async postPremises(newObject) {
    try {
      await this.client.connect();
      const typeCollection = newObject.type + 's';
      console.log(typeCollection)
      const collection = await this.client.db('test').collection(typeCollection);
      await collection.insertOne(newObject);
    } catch (e) {
      console.log('ошибка соединения', e);
    }
  }

}
