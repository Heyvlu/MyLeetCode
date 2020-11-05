var buildTree = function(inorder, postorder) {
    const map=new Map();
    for(let i=0;i<inorder.length;i++){
        map.set(inorder[i],i);
    }
    const helper=(p_start,p_end,i_start,i_end)=>{
        if(p_start>p_end) return null;
        let rootVal=postorder[p_end];
        let root=new TreeNode(rootVal);
        let mid=map.get(rootVal);
        let leftNum=mid-i_start;
        root.left=helper(p_start,p_start+leftNum-1,i_start,mid-1);
        root.right=helper(p_start+leftNum,p_end-1,mid+1,i_end);
        return root;
    };
    return helper(0,postorder.length-1,0,inorder.length-1);
};