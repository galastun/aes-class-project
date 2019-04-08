function toBinary(val1, val2) {
  const values = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, b: 11,
    c: 12, d: 13, e: 14, f: 15
  };

  const firstNumber = values[val1].toString(2).padStart(4, '0');
  const secondNumber = values[val2].toString(2).padStart(4, '0');

  return `${firstNumber}${secondNumber}`.split('').map(x => parseInt(x));
}

function generateSBox() {
  const identityMatrix = [
    [1, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1],
  ];

  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  for (h = 0; h < identityMatrix.length; h++) {

  }
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < values.length; j++) {
      // incomplete
    }
  }
}

/**
 * Takes in two matrices and multiplies them.
 * Arrays must be a multidimensional array.
 * 
 * Example: 
 * [
 *  [2, 3, 1, 1],
 *  [3, 2, 3, 3],
 *  [1, 2, 3, 1],
 *  [2, 2, 3, 1]
 * ]
 * @param {Array} matrix1 The first matrix
 * @param {Array} matrix2 The second matrix to multiply the first one
 * @returns {Array}
 */
function mixColumns(matrix1, matrix2) {
  // define the structure of the new one
  const newMatrix = [
    [],
    [],
    [],
    []
  ];

  // loop over the first matrix
  for (let i = 0; i < matrix1.length; i++) {
    // Adds all values up after they are multiplied
    const accumlator = [];
    let index = 0;
    // loop over the second matrix inside the first one
    for (let j = 0; j < matrix2.length; j++) {
      accumulator.push(matrix2[i, j] * matrix1[j, j]);
    }
    // add the value to the new position
    newMatrix[index, i].push(accumlator.reduce((acc, cv) => acc + cv));
    index++;
  }

  return newMatrix;
}