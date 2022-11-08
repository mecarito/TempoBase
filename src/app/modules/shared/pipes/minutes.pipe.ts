import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'millisecstoMIns' })
export class MinutesPipe implements PipeTransform {
  transform(milliSeconds: number): number {
    return Math.round(milliSeconds / 60000);
  }
}


