class Node {
  constructor(element) {
    this.data = element;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

// 生成一个二叉排序树
class BinarySortTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  append(element) {
    const newNode = new Node(element);

    if (!this.root) {
      this.root = newNode;
    } else {
      function _next(currentNode) {
        // 比根节点小的放左面
        const nextNode = element < currentNode.data ? currentNode.left : currentNode.right;
        if (!nextNode) {
          newNode.parent = currentNode;
          if (element < currentNode.data) {
            currentNode.left = newNode;
          } else {
            currentNode.right = newNode;
          }
          return;
        } else {
          _next(nextNode);
        }
      }
      _next(this.root);
    }
    this.size++;
  }
}

// 原始数据：[53, 17, 19, 61, 98, 75, 79, 63, 46, 40]

// 层序遍历：[53, 17, 61, 19, 98, 46, 75, 40, 63, 79]
// 先序遍历：[53, 17, 19, 46, 40, 61, 98, 75, 63, 79]
// 中序遍历：[17, 19, 40, 46, 53, 61, 63, 75, 79, 98] // 排序
// 后序遍历：[40, 46, 19, 17, 63, 79, 75, 98, 61, 53] // 深度优先遍历

const tree = new BinarySortTree();

[53, 17, 19, 61, 98, 75, 79, 63, 46, 40].map(item => tree.append(item))

// 测试
function fooOrder(tree) {
  const stack = [];
  const result = [];
  let current = tree.root;

  while (current != null || stack.length) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    } else {
      const node = stack.pop();
      result.push(node.data);
      current = node.right;
    }
  }
  return result;
}

function postOrder(tree) {
  const stack = [tree.root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.data);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result;
}

// console.log(
//   postOrder(tree)
// );

// // 层序遍历
// function leverOrder(tree) {
//   const stack = [tree.root];
//   const result = [];
//   while (stack.length) {
//     const node = stack.shift();
//     result.push(node.data);
//     if (node.left) {
//       stack.push(node.left);
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//   }
//   return result;
// }

// // 先序遍历 根 -> 左 -> 右
// function preOrder(tree) {
//   const result = [];
//   function find(node) {
//     if (!node) {
//       return;
//     }
//     result.push(node.data);
//     find(node.left);
//     find(node.right);
//   }
//   find(tree.root);
//   return result;
// }

// // 中序遍历 左 -> 根 -> 右
// function inOrder(tree) {
//   const result = [];
//   function find(node) {
//     if (!node) {
//       return;
//     }
//     find(node.left);
//     result.push(node.data);
//     find(node.right);
//   }
//   find(tree.root);
//   return result;
// }

// // 后序遍历  左 -> 右 -> 根
// function postOrder(tree) {
//   const result = [];
//   function find(node) {
//     if (!node) {
//       return;
//     }
//     find(node.left);
//     find(node.right);
//     result.push(node.data);
//   }
//   find(tree.root);
//   return result;
// }

