var isValidBST = function(root) {
    let isBST=(root,min,max)=>{
        if(root==null) return true;
        if(min!==null && root.val<=min.val) return false;
        if(max!==null && root.val>=max.val) return false;
        return isBST(root.left,min,root) && isBST(root.right,root,max);
    };
    return isBST(root,null,null);
};