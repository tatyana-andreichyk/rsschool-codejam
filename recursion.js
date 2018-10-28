let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

function buildNode(nodesTree) {
  console.log('processing node: ' + nodesTree.value);

  let arrayNodes = [];

  arrayNodes.push(nodesTree.value);

  
  if (nodesTree.left != null || nodesTree.right != null) {
    arrayNodes.push(buildNode(nodesTree.left));
    arrayNodes.push(buildNode(nodesTree.right));
  }
  
  return arrayNodes;
}


let array = buildNode(tree);


console.log(array);