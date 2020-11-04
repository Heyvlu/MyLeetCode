var fourSum = function(nums, target) {
    let res=[];
    if(nums.length<4){
        return [];
    }
    nums.sort((a,b)=>a-b);
    for(let m=0;m<nums.length-3;m++){
        if(m>0 && nums[m]==nums[m-1]){
            continue;
        }
        if((nums[m]+nums[m+1]+nums[m+2]+nums[m+3])>target) break;
        for(let i=m+1;i<nums.length-2;i++){
            if(i>m+1 && nums[i]==nums[i-1]){
                continue;
            }
            let L=i+1;
            let R=nums.length-1;
            while(L<R){
                const sum=nums[i]+nums[L]+nums[R]+nums[m];
                if(sum==target){
                    res.push([nums[m],nums[i],nums[L],nums[R]]);
                    while(L<R && nums[L]==nums[L+1]){
                        L++;
                    }
                    while(L<R && nums[R]==nums[R-1]){
                        R--;
                    }
                    L++;
                    R--;
                }else if(sum<target){
                    L++;
                }else{
                    R--;
                }
            }
        }
    }
    return res;
};
console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2],-9));