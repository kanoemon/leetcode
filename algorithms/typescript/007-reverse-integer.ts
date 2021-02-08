function reverse(x: number): number {
    const s: string = Math.abs(x).toString().split('').reverse().join('');
    const result: number = x < 0 ? -Number(s) : Number(s);
    
    return isRange(result) ? result : 0;
};

function isRange(x: number):boolean {
    return -2147483648 <= x && x <= 2147483648 - 1;
};
