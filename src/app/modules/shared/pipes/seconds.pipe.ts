import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'millisecstoSecs' })
export class SecondsPipe implements PipeTransform {
  transform(milliSeconds: number): string {
    const audioSeconds = milliSeconds / 1000
    const minutes = Math.floor(audioSeconds / 60);
    const seconds = Math.floor(audioSeconds % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }
}
