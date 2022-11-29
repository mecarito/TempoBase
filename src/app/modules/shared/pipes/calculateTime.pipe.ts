import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'calculateTime' })
export class CalculateTimePipe implements PipeTransform {
  transform(audioSeconds: number): string {
    const minutes = Math.round(audioSeconds / 60);
    const seconds = Math.round(audioSeconds % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }
}
