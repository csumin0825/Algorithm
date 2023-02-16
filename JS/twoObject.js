const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

//1. JSON.stringify 사용
function isEqual(objA, objB) {
  let a = JSON.stringify(objA);
  let b = JSON.stringify(objB);

  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isEqual(obj1, obj2));

//2. 재귀함수 사용
function isEqual_2(objA, objB) {
  const checkObject = objA && objB && typeof objA === "object" && typeof objB === "object";

  if (checkObject && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqual_2(objA[key], objB[key]);
    }, true);
  } else {
    return objA === objB;
  }
}

console.log(isEqual_2(obj1, obj2));
