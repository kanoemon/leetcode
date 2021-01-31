function lengthOfLongestSubstring(s: string): number {     
    const arr2 = s.split('');
    let result = [];
    let max = 0;
    let temp = [];
    
    for(let i = 0; i < arr2.length; i++) {
        let u = temp.filter((e) => {
            console.log(e)
            console.log(arr2[i]);
            return arr2[i] === e;
        });
        if (u.length === 0) {
            temp.push(arr2[i]);
            max = temp.length;
        } else {
            if (temp.length > max) {
                max = temp.length;
            }
            //max = temp.length;
            temp = [];
            temp.push(arr2[i]);
        }
    }
    //console.log(max);
    return max;
};
