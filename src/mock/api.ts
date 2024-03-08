import MAP1 from './map-644891e273ee4a54330ac27c'
export function getMap(id: string) {
  switch (id) {
    case '644891e273ee4a54330ac27c':
      return MAP1;

    default:
      throw new Error('Map not found');
  }

}