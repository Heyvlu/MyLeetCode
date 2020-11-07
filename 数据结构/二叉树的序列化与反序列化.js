var serialize = function(root) {
    let str = '';
    const dfs = (node) => {
      if (node) {
        str += `${node.val},`;
        dfs(node.left);
        dfs(node.right);
      } else {
        str += '#,'
      }
  
    }
    dfs(root);
    return str;
};

var deserialize = function(data) {
    let arr = data.split(',');
    let index = 0;
  
    const buildTree = (arr) => {
      let s = arr[index];
      index++;
      if (s === '#') {
        return null;
      }
      let node = new TreeNode(s);
      node.left = buildTree(arr);
      node.right = buildTree(arr);
      return node;
    }
    return buildTree(arr);
};