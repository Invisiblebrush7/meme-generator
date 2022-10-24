import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLineToBr',
})
export class NewLineToBrPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // return value.replace(/\n/g, '<br>');
    return value.replaceAll('\n', '<br>');
  }
}
