exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
      return 0;
  } else {
      let min = array[0];
      for (let i = 0; i < array.length; i++) {
          if (array[i] < min) {
              min = array[i];
          }
      }
      return min;
  }
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
      return 0;
  } else {
      let max = array[0];
      array.forEach(element => {
          if (element > max) {
              max = element;
          }
      });
      return max;
  }
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
      return 0;
  } else {
      let sum = array.reduce((acc,item) => acc+item);
      return sum/array.length;
  }
}
