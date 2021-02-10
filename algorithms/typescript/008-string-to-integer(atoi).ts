function myAtoi(s: string): number {
    let i: number = 0;
    let negative: boolean = false;
    let res: string = '';
    while(i < s.length) {
        if (s[i] === ' ') {
            i++;
            continue;
        }
        if (s[i] === '-') negative = true;
        if (Number(s[i])) {
            console.log(Number(s[i]));
            res += s[i];
        }
        //console.log(Number(s[i]));
        i++;
    }
    console.log(res);
    return negative ? -Number(res) : Number(res);
};
