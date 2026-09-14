// Pure function: cube a single integer 
export function cube(x: number): number{
    return x * x * x;
}

// map over a sequance
export function cubes(xs: number[]): number[] {
    return xs.map(cube);
}
