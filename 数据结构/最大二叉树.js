var constructMaximumBinaryTree = function(nums) {
    if(!nums.length){
        return null;
    }
    let m=0;let n=nums.length-1;
    let index=-1;let maxValue=-Infinity;
    for(;m<=n;m++){
        if(nums[m]>maxValue){
            maxValue=nums[m];
            index=m;
        }
    }
    let root=new TreeNode(maxValue);
    root.left=constructMaximumBinaryTree(nums.slice(0,index));
    root.right=constructMaximumBinaryTree(nums.slice(index+1));
    return root;
};