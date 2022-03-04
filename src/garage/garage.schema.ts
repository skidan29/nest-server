import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GarageDocument = Garage & Document;

@Schema()
export class Garage {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const GarageSchema = SchemaFactory.createForClass(Garage);
