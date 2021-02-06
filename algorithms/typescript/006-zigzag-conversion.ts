function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    
    let convertRows: string[] = new Array(numRows),
        p: number = 0,
        curRow: number = 0,
        up: boolean = true;
    
    while(p < s.length) {
        if (convertRows[curRow] === undefined) convertRows[curRow] = '';
        
        convertRows[curRow] += s[p];
        if (curRow === 0 || curRow === numRows - 1) up = !up;
        
        curRow += up ? -1 : 1;
        p++;
    }

    return convertRows.join('');
};
