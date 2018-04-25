export class Player {
  name: string;
  position: string;
  trait: string;
  fitness: number;
  contracts: number;
}

export const PLAYERS = [
  {name: 'Karius', position: 'GK', trait: 'starter', fitness: 50, contracts: 7},
  {name: 'Mignolet', position: 'GK', trait: '', fitness: 30, contracts: 7},
  {name: 'Danny Ward', position: 'GK', trait: 'bench warmer', fitness: 70, contracts: 7}
];
