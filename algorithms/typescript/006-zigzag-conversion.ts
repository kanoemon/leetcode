function convert(s: string, numRows: number): string {
    
    let convertRows = [];
    let p: number = 0;
    let r: number = numRows - 1;
    
    while(p < s.length) { 
        if (r === 0) r = numRows - 1;
        
        for(let i: number = 0; i < numRows; i++) {
            if (convertRows[i] === undefined) convertRows[i] = [];
            
            let v: string = (s[p] === undefined) ? '' : s[p];

            if (r === 0 || r === numRows - 1) {
                convertRows[i].push(v);
                p++;
            } else if (i === r) {
                convertRows[i].push(v);
                p++;
            } else {
                convertRows[i].push('');
            }
        }
        r--;
    }
    
    let rs: string = '';
    for(let j: number = 0; j < convertRows.length; j++) {
        //rs += convertRows[j].join('');
    }

    return rs;

};
