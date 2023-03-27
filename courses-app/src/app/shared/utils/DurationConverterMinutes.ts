import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'durationConverterMinutes',
})

export class DurationConverterMinutesPipe implements PipeTransform {
    transform(duration: number) {
        const value =  duration % 60
        if(value < 10){
          return '0' + Math.floor(value)
        }
        return Math.floor(value)
    }
}