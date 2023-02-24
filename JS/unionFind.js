const N = 8;

unionFind(N);

function unionFind(n) {
  const arr = new Array(n);
  for (let i = 1; i <= n; i++) {
    arr[i] = i;
  }
  unionParent(arr, 1, 2);
  unionParent(arr, 1, 3);
  unionParent(arr, 4, 6);
  unionParent(arr, 5, 6);
  unionParent(arr, 7, 8);

  console.log(arr);

  console.log(findParent(arr, 1, 2));
  console.log(findParent(arr, 1, 3));
  console.log(findParent(arr, 3, 5));
  console.log(findParent(arr, 4, 5));
  console.log(findParent(arr, 6, 8));

  function getParent(arr, n) {
    if (arr[n] === n) return n;
    return (arr[n] = getParent(arr, arr[n]));
  }

  function unionParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);
    if (a < b) arr[b] = a;
    else arr[a] = b;
  }
  function findParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);
    if (a === b) return true;
    else return false;
  }
}
