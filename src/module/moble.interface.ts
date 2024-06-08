export type TMobileSpecs = {
  screenSize: string;
  batteryLife: string;
  camera: string;
  processor: string;
  storage: string;
  ram: string;
  os: string;
};

export type TMoble = {
  companyName: string;
  country: string;
  contactInfo: string;
  email: string;
  model: string;
  releaseDate: string;
  mobleInfo: TMobileSpecs;
  price: string;
};
