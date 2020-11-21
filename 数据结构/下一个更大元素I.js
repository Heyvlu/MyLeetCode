var nextGreaterElement = function(nums1, nums2) {
    let map=new Map();
    let res=[];
    let m=nums2.length;
    let stack=[];
    for(let i=0;i<m;i++){
        // 维护一个单调递减的栈，如果遇到比栈顶大的元素就是第一个比自己大的了
        while(stack.length&&nums2[i]>=stack[stack.length-1]){
            map.set(stack.pop(),nums2[i]);
        }
        stack.push(nums2[i]);
    }
    while(stack.length){
        map.set(stack.pop(),-1);
    }
    nums1.forEach(item=>{
        res.push(map.get(item));
    })
    return res;
};