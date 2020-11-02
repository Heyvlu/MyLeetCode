
var findAnagrams=function(s,p){
    let map={},missingType=0;
    let result=[];
    for (const char of p) {
        if(!map[char]){
            missingType++;
            map[char]=1;
        }else{
            map[char]++;
        }
    }
    let left=0,right=0;
    for(;right<s.length;right++){
        let rightChar=s.charAt(right);
        if(map[rightChar]!==undefined){
            map[rightChar]--;
        }
        if(map[rightChar]==0){
            missingType--;
        }
        while(missingType==0){
            if((right-left+1)==p.length){
                result.push(left);
            }
            let leftChar=s[left];
            if(map[leftChar]!==undefined){
                map[leftChar]++;
            }
            if(map[leftChar]>0){
                missingType++;
            }
            left++;
        }
    }
    return result;
};
console.log(findAnagrams("abab","ab"));