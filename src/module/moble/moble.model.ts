import { Schema, model } from 'mongoose';
import { TMobileSpecs, TMoble } from './moble.interface';
const TMobileSpecsSchema = new Schema<TMobileSpecs>({
  screenSize: { type: String },
  batteryLife: { type: String },
  camera: { type: String },
  processor: { type: String },
  storage: { type: String },
  ram: { type: String },
  os: { type: String },
});

const TMobleSchema = new Schema<TMoble>({
  companyName: { type: String },
  country: { type: String },
  contactInfo: { type: String },
  email: { type: String, unique:true},
  model: { type: String ,unique:true},
  releaseDate: { type: String },
  mobleInfo: TMobileSpecsSchema,
  price: { type: String },
});

export const MobleModel = model<TMoble>('Moble', TMobleSchema);
