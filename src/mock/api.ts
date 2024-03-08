import MAP1 from './map-644891e273ee4a54330ac27c'
import MAP2 from './map-6448920773ee4a54330ac325'
import MAP3 from './map-6448a41973ee4a54330af998'
import MAP4 from './map-6448a44c73ee4a54330afa33'
import MAP5 from './map-65e83bbc3772bfbd5267acd7'

export function getMap(id: string) {
  switch (id) {
    case '644891e273ee4a54330ac27c':
      return MAP1;
    
    case '6448920773ee4a54330ac325':
      return MAP2;

    case '6448a41973ee4a54330af998':
      return MAP3;
    
    case '6448a44c73ee4a54330afa33':
      return MAP4;

    case '65e83bbc3772bfbd5267acd7':
      return MAP5;
      
    default:
      throw new Error('Map not found');
  }

}