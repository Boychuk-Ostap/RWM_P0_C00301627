export function DecrementIfLessThanFirst(xs: number[]): number[]{
    const firstNumber = xs[0];

    return xs.map( x=> {
        if(x < firstNumber){
            return x - 1;
        }
        return x;
    });
}