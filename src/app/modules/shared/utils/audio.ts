export function audioCurrentTIme(sliderValue: string, audioDuration: number): number {
    return (Number(sliderValue) * audioDuration) / 100;
}

export function sliderPercentage(currentTime: number, audioDuration: number): string {
    return  String(Math.round((100 * currentTime) / audioDuration))
}