var moveZeroes = function(nums) {
    let slow=0;fast=0;
    while(fast<nums.length){
        if(nums[fast]!==0){
            nums[slow]=nums[fast];
            slow++;
        }
        fast++;
    }
    // 把slow及之后的元素赋值为零
    for(let p=slow;p<nums.length;p++){
        nums[p]=0;
    }
    return nums;
};