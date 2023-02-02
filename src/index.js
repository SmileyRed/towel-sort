
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resultArr = [];
  if (!matrix) {
    return resultArr;
  }

  for (let i = 0; i < matrix.length; i++) {
    let subArr;
    if (i % 2 === 0) {
      subArr = matrix[i];
    } else {
      subArr = matrix[i].reverse();
    }

    for (let j = 0; j < subArr.length; j++) {
      resultArr.push(subArr[j]);
    }

  }

  return resultArr
}
