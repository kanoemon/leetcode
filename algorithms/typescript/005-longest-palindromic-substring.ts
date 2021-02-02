function longestPalindrome(s: string): string {
    let a: number = 0,
        b: number = s.length,
        result: string = '';
    
    while(a < s.length) {
        b = s.length;
        while(a < b) {
            let sub: string = s.substring(a, b);
            console.log(sub);
            if (sub === sub.split('').reverse().join('')) {
                result = result.length > sub.length ? result : sub;
            }
            b--;
        }
        a++;   
    }
    return result;
};
