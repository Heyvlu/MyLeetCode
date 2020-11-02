var checkInclusion=(s1,s2)=>{
    let map={},missingType=0;
    for (const char of s1) {
        if(!map[char]){
            missingType++;
            map[char]=1;
        }else{
            map[char]++;
        }
    }
    let left=0,right=0;
    for(;right<s2.length;right++){
        let rightChar=s2.charAt(right);
        if(map[rightChar]!==undefined){
            map[rightChar]--;
        }
        if(map[rightChar]==0){
            missingType--;
        }
        while(missingType==0){
            if((right-left+1)==s1.length){
                return true;
            }
            let leftChar=s2[left];
            if(map[leftChar]!==undefined){
                map[leftChar]++;
            }
            if(map[leftChar]>0){
                missingType++;
            }
            left++;
        }
    }
    return false;
};
console.log(checkInclusion("ab","eidboaoo"));