import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'millisecstoMIns' })
export class MinutesPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value / 60000);
  }
}
