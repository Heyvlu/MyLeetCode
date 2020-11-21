var dailyTemperatures = function(T) {
    let res=new Array(T.length).fill(0);
    let stack=[];
    for(let i=0;i<T.length;i++){
        // 维护一个单调递减栈
        while(stack.length&&T[i]>T[stack[stack.length-1]]){
            let index=stack.pop();
            res[index]=i-index;
        }
        stack.push(i);
    }
    return res;
};