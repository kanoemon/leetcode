function convert(s: string, numRows: number): string {
    
    let convertRows = [];
    let p: number = 0;
    let lastRow: number = numRows - 1;
    let r: number = lastRow;
    
    while(p < s.length) { 
        if (r === 0) r = lastRow;
        
        for(let i: number = 0; i < numRows; i++) {
            if (convertRows[i] === undefined) convertRows[i] = '';
            
            if (s[p] === undefined) break;

            if (r === lastRow || r === i) {
                convertRows[i] += s[p];
                p++;
            }
        }
        r--;
    }
    
    return convertRows.join('');
};
