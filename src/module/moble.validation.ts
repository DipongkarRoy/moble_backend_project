import { z } from 'zod';

const TMobileSpecsValited = z.object({
  screenSize: z.string(),
  batteryLife: z.string(),
  camera: z.string(),
  processor: z.string(),
  storage: z.string(),
  ram: z.string(),
  os: z.string(),
});

const TMobleValited = z.object({
   body: z.object({
    companyName: z.string(),
    country: z.string(),
    contactInfo: z.string(),
    email: z.string().email(),
    model: z.string(),
    releaseDate: z.string(),
    mobleInfo: TMobileSpecsValited,
    price: z.string(),
  })
});

export const MobleValidation = {
  TMobleValited,
};
