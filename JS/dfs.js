const graph = { 0: [], 1: [2, 3, 8], 2: [1, 7], 3: [1, 4, 5], 4: [3, 5], 5: [3, 4], 6: [7], 7: [2, 6, 8], 8: [1, 7] };

function dfs(graph, startNode) {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
      //   console.log(needVisit);
      //   needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
}

console.log(dfs(graph, 1));
