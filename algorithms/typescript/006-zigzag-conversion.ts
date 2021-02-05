function convert(s: string, numRows: number): string {
    let result = [];
    let i: number = 0;
    let x: number = 0;
    while(i < s.length) {
        let row = [];
        for(let n:number = 0; n < numRows; n++) {
            if (s[i] === undefined) {
                row.push('');
            } else {
                row.push(s[i]);
            }
            i++;
        }
        result.push(row);
        
        // numRows - 2 回行う
        let h = 0;
        for (let m: number = 0; m < numRows - 2; m++) {
           row = [];
            for(let a:number = 0; a < numRows; a++) {
                // -1ずつ増える
                console.log(h);
                if (a === numRows - 2 + h && s[i] !== undefined) {
                    row.push(s[i]);
                    i++;
                } else {
                    row.push('');
                }
            }
            h--;
            result.push(row); 
        }
        
        
    }
    console.log(result);
    
    let rs = '';
    for(let b = 0; b < numRows; b++) {
        for(let a = 0; a < result.length; a++) {
            rs += result[a].shift()
        } 
    }

    //console.log(result);
    return rs;
};
