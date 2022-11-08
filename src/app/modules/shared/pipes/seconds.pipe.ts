import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'millisecstoSecs' })
export class SecondsPipe implements PipeTransform {
  transform(milliSeconds: number): string {
    const totalSeconds = milliSeconds / 1000;
    const roundedMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalSeconds / 60;
    const seconds = Math.floor((minutes - roundedMinutes) * 60);

    console.log(roundedMinutes, minutes, seconds);

    return `${String(roundedMinutes)}:${String(seconds)}`;
  }
}
