import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateConverter',
})

export class DateConverterPipe implements PipeTransform {
  transform(date: Date) {
    return date //TODO
  }
}
