export type Car = {
  id: string;
  name: string;
  type: 'Economy' | 'SUV' | 'Luxury';
  pricePerDay: number;
  available: boolean;
  image: string;
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  transmission: 'Manuelle' | 'Automatique';
  seats: number;
};

export const cars: Car[] = [
  {
    id: '1',
    name: 'Dacia Logan',
    type: 'Economy',
    pricePerDay: 200,
    available: true,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    seats: 5,
  },
  {
    id: '2',
    name: 'Renault Clio 5',
    type: 'Economy',
    pricePerDay: 250,
    available: true,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    seats: 5,
  },
  {
    id: '3',
    name: 'Hyundai Tucson',
    type: 'SUV',
    pricePerDay: 600,
    available: true,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
  },
  {
    id: '4',
    name: 'Range Rover Sport',
    type: 'Luxury',
    pricePerDay: 1500,
    available: true,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
  },
  {
    id: '5',
    name: 'Peugeot 208',
    type: 'Economy',
    pricePerDay: 250,
    available: false,
    image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=800',
    fuel: 'Essence',
    transmission: 'Manuelle',
    seats: 5,
  },
  {
    id: '6',
    name: 'Mercedes-Benz G-Class',
    type: 'Luxury',
    pricePerDay: 2500,
    available: true,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    transmission: 'Automatique',
    seats: 5,
  },
];
