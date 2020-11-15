var deleteNode = function(root, key) {
    if(root==null) return null;
    // minNode为右子树的最小值，拿来替换找到的key的（对于第三种情况）
    let minNode=(node)=>{
        while(node.left!==null){
            node=node.left;
        }
        return node;
    };
    if(root.val==key){
        if(root.left==null) return root.right;
        if(root.right==null) return root.left;
        let min=minNode(root.right);
        root.val=min.val;
        root.right=deleteNode(root.right,min.val);
    }else if(root.val>key){
        root.left=deleteNode(root.left,key);
    }else if(root.val<key){
        root.right=deleteNode(root.right,key);
    }
    return root;
};