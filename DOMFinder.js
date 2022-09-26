//Find DOM path
//Find the rootB'th child with the help of rootA
const findPath = (parent, node) => {
  let currentNode = node,
    path = [];
  while (currentNode !== parent) {
    const parentElement = currentNode.parentElement;
    const childArray = Array.from(parentElement.children);
    path.push(childArray.indexOf(currentNode));
    currentNode = parentElement;
  }
  return path;
};

const findNode = (parent, path) => {
  let currentElement = parent;
  while (path.length) {
    currentElement = currentElement.children[path.pop()];
  }
  return currentElement.innerText;
};

const DOM_Path = () => {
  let rootA = document.getElementById('rootA');
  let nodeA = document.getElementById('nodeA');
  let rootB = document.getElementById('rootB');
  let path = findPath(rootA, nodeA);
  console.log('path', path);
  let node = findNode(rootB, path);
  console.log('result', node);
};
DOM_Path();
//HTML
/*
<div id="rootA">
      <div></div>
      <div></div>
      <div>
        <div></div>
        <div>
          <div>
            <div></div>
            <div id="nodeA">Node A value</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="rootB">
      <div></div>
      <div></div>
      <div>
        <div></div>
        <div>
          <div>
            <div></div>
            <div>Node B value</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
 */
