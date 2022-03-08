import {
    Controller,
    Get, Post, Res
} from "@nestjs/common";
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient("mongodb+srv://Skidan_1306:Skidan_1306@cluster0.f8mq5.mongodb.net/test?retryWrites=true&w=majority");

const getStart = async () => {

  try{
   await client.connect();

   const collection =  await client.db("test").collection("garages");
   return await collection.find().toArray();

  }catch (e){
      console.log('ошибка соединения', e);
  }

}

const postStart = async () => {

    try{
        await client.connect();

        const collection =  await client.db("test").collection("garages");
        return await collection.find().toArray();

    }catch (e){
        console.log('ошибка соединения', e);
    }

}

@Controller('api')
export class GarageController {

  @Get('/garages')
  getWorld() {

    return getStart();
  }

  @Post('/garages')
    postWorld(@Res() res) {

       console.log('res', res)
    }
}
