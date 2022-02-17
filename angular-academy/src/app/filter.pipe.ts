import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
     // si la categoria a buscar es vacia, null, 'All' o undefined retornamos todos los items sin filtar nada
    if (!filter || filter == 'All') {
      return items;
  } else
  
  // aqui asumó que tu interfaz de producto tiene una propiedad llamada category por la cual vamos a filtrar
  return items.filter(({ category }) => category === filter);
    
}
}