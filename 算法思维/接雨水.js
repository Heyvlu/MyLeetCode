var trap = function(height) {
    if(height.length==0) return 0;
    let n=height.length;
    let left=0,right=n-1;
    let res=0;
    let l_max=height[0];
    let r_max=height[n-1];
    while(left<right){
        l_max=Math.max(l_max,height[left]);
        r_max=Math.max(r_max,height[right]);
        if(l_max<r_max){
            res+=l_max-height[left];
            left++;
        }else{
            res+=r_max-height[right];
            right--;
        }
    }
    return res;
};