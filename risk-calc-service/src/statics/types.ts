
export type MapPosition = {
    lat: number;
    long: number;
}
export type Int = number & { __int__: void };
export const roundToInt = (num: number): Int => Math.round(num) as Int;
