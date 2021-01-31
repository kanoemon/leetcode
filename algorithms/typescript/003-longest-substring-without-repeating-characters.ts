function lengthOfLongestSubstring(s: string): number {     
    const arr = s.split('');
    
    let t = [],
        c = [];
    for(let i: number = 0; i < arr.length; i++) {
        t.push(arr[i]);
        for(let j: number = 0; j < arr.length; j++) {
            if (i >= j) continue;
            
            if (t.filter(e => e === arr[j]).length > 0) break;
            t.push(arr[j]);
        }
        c.push(t.length);
        t = [];
    }

    return c.length === 0 ? 0 : Math.max(...c);
};
