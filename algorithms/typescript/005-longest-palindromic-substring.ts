function longestPalindrome(s: string): string {  
    let i: number = 0,
        result: string = '';
    
    while(i < s.length) {
        let sub: string = aroundCenter(s, i, i);
        let sub2: string = aroundCenter(s, i, i + 1);
        result = sub.length > result.length ? sub : result;
        result = sub2.length > result.length ? sub2 : result;
        i++;
    }
    return result;
};

function aroundCenter(s: string, l: number, r: number) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        r++;
        l--;
    }
    return s.substring(l + 1, r);
};
