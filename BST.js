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

  deleteItem(value) {
    if (this.root == null) {
      return false;
    }
    let currNode = this.root;
    let prevNode = null;
    while (currNode != null) {
      if (value > currNode.value) {
        prevNode = currNode;
        currNode = currNode.right;
      }
      if (value < currNode.value) {
        prevNode = currNode;
        currNode = currNode.left;
      }
      if (value == currNode.value) {
        if (currNode.left && currNode.right) {
          let succ = currNode.right;
          while (succ != null && succ.left != null) {
            succ = succ.left;
          }
          deleteItem(succ.value);
          currNode.value = succ.value;

        } else if (!currNode.left && currNode.right) {
          if (prevNode != null) {
            value > prevNode.value ? prevNode.right = currNode.right : prevNode.left = currNode.right;
            currNode = null;
          } else {
            this.root = currNode.right;
          }
        } else if (currNode.left && !currNode.right) {
          if (prevNode != null) {
            value > prevNode.value ? prevNode.right = currNode.left : prevNode.left = currNode.left;
            currNode = null;
          } else {
            this.root = currNode.left;
          }
        } else if (!currNode.left && !currNode.right) {
          if (prevNode != null) {
            value > prevNode.value ? prevNode.right = currNode.right : prevNode.left = currNode.right;
            currNode = null;
          } else {
            this.root = null;
          }
        }
        return true;
      }
    }
    return false;
  }

  find(value) {
    let currNode = this.root;
    while (currNode != null) {
      if (currNode.value == value) {
        return currNode;
      } else {
        if (value > currNode.value) {
          currNode = currNode.right;
        } else if (value < currNode.value) {
          currNode = currNode.left;
        }
      }
    }
    return null;
  }

  levelOrder(callback) {
    if (typeof callback === 'function') {
      let queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
        let currNode = queue.shift();
        callback(currNode);
        if (currNode.left != null) queue.push(currNode.left);
        if (currNode.right != null) queue.push(currNode.right);
      }
    }else{
      console.log('Use a function as an input');
      return;
    }

  }
  
  inOrder(callback, node = this.root){
    if(node != null){
    	this.inOrder(callback, node.left);
    	callback(node);
    	this.inOrder(callback, node.right);
    }
  }
  
  preOrder(callback, node = this.root){
    if(node != null){
      callback(node);
    	this.preOrder(callback, node.left);
    	this.preOrder(callback, node.right);
    }
  }
  
  postOrder(callback, node = this.root){
    if(node != null){
    	this.postOrder(callback, node.left);
    	this.postOrder(callback, node.right);
      callback(node);
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
test.levelOrder((node) => {console.log(node.value)});
console.log('---------------');
test.inOrder((node) => {console.log(node.value)});
console.log('---------------');
test.preOrder((node) => {console.log(node.value)});
console.log('---------------');
test.postOrder((node) => {console.log(node.value)});
