import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalesPorNumeros',
})
export class VocalesPorNumerosPipe implements PipeTransform {
  vocales: Map<string, string> = new Map([
    ['a', '1'],
    ['e', '2'],
    ['i', '3'],
    ['o', '4'],
    ['u', '5'],
  ]);

  transform(value: string): string {
    return value
      .split('')
      .map((letra) =>
        this.vocales.has(letra) ? this.vocales.get(letra) : letra
      )
      .join('');
  }
}
