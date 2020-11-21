var nextGreaterElements = function(nums) {
    const doubleNums=[...nums,...nums];
    const length=doubleNums.length;
    if(length==0) return doubleNums;
    let stack=[];
    let res=new Array(length).fill(-1);
    for(let i=0;i<length;i++){
        // 维护一个单调递减栈
        while(stack.length&&doubleNums[i]>doubleNums[stack[stack.length-1]]){
            res[stack.pop()]=doubleNums[i];
        }
        stack.push(i);
    }
    return res.slice(0,(res.length/2));
};