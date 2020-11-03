function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var rob = function(root) {
    if(root == undefined)   //处理特殊情况[]
        return 0;
    // 后序遍历, 为每个结点添加max_val和aban.val属性
    postOrder(root);
    return root.max_val; 
};

function postOrder(root)
{
    //若左侧不为空结点: 继续遍历
    if(root.left !== null)
    {
        arguments.callee(root.left);
    }else { //若为空: 给左侧添加一个结点(便于处理)
        root.left = {
            aban_val : 0,
            max_val: 0
        };
    }

    // 右侧处理同上
    if(root.right !== null)
    {
        arguments.callee(root.right);
    }else 
        root.right = {
            aban_val : 0,
            max_val: 0
    };

    //为该结点添加属性 aban_val和max_val, 其中sel_val为假设当前结点选中的情况下的最大值
    root.aban_val = root.left.max_val + root.right.max_val;
    var sel_val = root.left.aban_val + root.right.aban_val + root.val;
    root.max_val = Math.max(sel_val, root.aban_val);
}
console.log(rob([3,2,3,null,3,null,1]));