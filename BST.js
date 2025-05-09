function knightMoves(start, end) {
  if (!checkCoordinate(start) || !checkCoordinate(end)) {
    console.log('Please enter a valid start and end value. All coordinates should be in the range [0,7]');
  }
  let trails = new Graph(start);
  let visited = [];
  visited.push(trails.root.toString());
  let queue = [];
  queue.push(trails.root);
  let i = 0;
  let foundNode = null;
  while (i < visited.length) {
    let node = queue.shift();
    if (node.data.toString() === end.toString() && foundNode === null) {
      foundNode = node;
      break;
    }
    move0 = new GraphNode([node.data[0] + 2, node.data[1] + 1], node);
    move1 = new GraphNode([node.data[0] + 2, node.data[1] - 1], node);
    move2 = new GraphNode([node.data[0] - 2, node.data[1] + 1], node);
    move3 = new GraphNode([node.data[0] - 2, node.data[1] - 1], node);
    move4 = new GraphNode([node.data[0] + 1, node.data[1] + 2], node);
    move5 = new GraphNode([node.data[0] + 1, node.data[1] - 2], node);
    move6 = new GraphNode([node.data[0] - 1, node.data[1] + 2], node);
    move7 = new GraphNode([node.data[0] - 1, node.data[1] - 2], node);
    if (checkCoordinate(move0.data) && !visited.includes(move0.data.toString())) {
      node.addEdge(move0);
      visited.push(move0.data.toString());
      queue.push(move0);
    }
    if (checkCoordinate(move1.data) && !visited.includes(move1.data.toString())) {
      node.addEdge(move1);
      visited.push(move1.data.toString());
      queue.push(move1);
    }
    if (checkCoordinate(move2.data) && !visited.includes(move2.data.toString())) {
      node.addEdge(move2);
      visited.push(move2.data.toString());
      queue.push(move2);
    }
    if (checkCoordinate(move3.data) && !visited.includes(move3.data.toString())) {
      node.addEdge(move3);
      visited.push(move3.data.toString());
      queue.push(move3);
    }
    if (checkCoordinate(move4.data) && !visited.includes(move4.data.toString())) {
      node.addEdge(move4);
      visited.push(move4.data.toString());
      queue.push(move4);
    }
    if (checkCoordinate(move5.data) && !visited.includes(move5.data.toString())) {
      node.addEdge(move5);
      visited.push(move5.data.toString());
      queue.push(move5);
    }
    if (checkCoordinate(move6.data) && !visited.includes(move6.data.toString())) {
      node.addEdge(move6);
      visited.push(move6.data.toString());
      queue.push(move6);
    }
    if (checkCoordinate(move7.data) && !visited.includes(move7.data.toString())) {
      node.addEdge(move7);
      visited.push(move7.data.toString());
      queue.push(move7);
    }
    i++;
  }
  let travail = [];
  while (foundNode != null) {
    travail.unshift(foundNode.data);
    foundNode = foundNode.parent;
  }

  return travail;
}

function checkCoordinate(coord) {
  if (coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7) {
    return false;
  } else {
    return true;
  }
}


class Graph {
  constructor(data) {
    this.root = new GraphNode(data);
  }
}

class GraphNode {
  constructor(data, parent = null) {
    this.data = data;
    this.parent = parent;
    this.edges = [];
  }

  addEdge(newNode) {
    this.edges.push(newNode);
  }
}

console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[7,7]));
console.log(knightMoves([3,3],[4,3]));
