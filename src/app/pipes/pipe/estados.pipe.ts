import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value:number): string {
    
    switch (value) {
      case 0:
        return "ANULADO"
        break;
      case 1:
        return "ACTIVO"
      default:
        return "SIN ESTADO"
        break;
    }
  }

}
