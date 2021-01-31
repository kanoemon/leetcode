// anviaj
function lengthOfLongestSubstring(s: string): number {     
    const arr = s.split('');
    let max = 0;
    
    if (arr.length === 1) return 1;
    
    for(let i: number = 0; i < arr.length; i++) {
        for(let j: number = 0; j < arr.length; j++) {
           
            if (i === j) continue;
            if (i > j) continue;
            if (arr[i] === arr[j]) {
                if (j - i > max) max = j - i;
                //if (j - i > max) max = j - i;
                //max = j - i;
                //console.log(pwwkew);
                break;
            }
            if (j - i + 1 > max) max = j - i + 1;
        }
    }
    
    if (max === 0) return arr.length;
    
    //console.log(max);
    return max;
};
