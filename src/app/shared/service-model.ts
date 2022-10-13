export interface Service {
  id: string;
  service: string;
  provider: Provider;
  rating: number;
  status: string;
}

export interface Provider {
  name: string;
  contact: string
}