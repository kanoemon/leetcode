function lengthOfLongestSubstring(s: string): number {     
    const length: number = s.length;
    if(length <= 1) return length;
    
    let x: number = 0;
    let y: number = 1;
    let result: number = 1;
    while(y < length) {
        let sub: string = s.slice(x, y);
        let i: number = sub.indexOf(s[y]);
        if (i !== -1) x = x + i + 1;
        y++;
        
        result = y - x > result ? y - x : result; 
    }

    return result;
};
