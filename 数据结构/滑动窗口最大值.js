var maxSlidingWindow = function(nums, k) {
    // 单调队列
    const deque=[];
    const res=[];
    for(let i=0;i<nums.length;i++){
        if(i-deque[0]>=k) deque.shift();
        // 维护单调队列
        while(nums[deque[deque.length-1]]<=nums[i]){
            deque.pop();
        }
        deque.push(i);
        if(i>=k-1){
            res.push(nums[deque[0]]);
        }
    }
    return res;
};