class BST {
  constructor(array) {
    this.root = null;
    this.root = this.buildTree(array, this.root);
  }

  buildTree(array, node) {
    /** if(array.length == 0) return node;
     let newNode = new TreeNode(array[0]);
     array.shift();
     if (!node) node = newNode;
     if (array[0] < node.value) node.left = this.buildTree(array, node.left);
     if (array[0] > node.value) node.right = this.buildTree(array, node.right);
     if (array[0] == node.value) array.shift;
     **/
    for (let i = 0; i < array.length; i++) {
      node = this.insert(array[i], node);
    }
    return node;
  }

  insert(value, node) {
    if (!node) return new TreeNode(value);
    if (value < node.value) node.left = this.insert(value, node.left);
    if (value > node.value) node.right = this.insert(value, node.right);
    if (value == node.value) return node;
    return node;
  }
  
  deleteItem(value, node){
    if(node.value == value){
      if(!node.left && !node.right) return null;
    }
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


}


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let test = new BST([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
test.prettyPrint();
