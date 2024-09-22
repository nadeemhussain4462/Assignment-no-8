// Assignment no 8
// Question no # 1

var array = [1, 120, 33, 14, 50, 96, 27, 48, 99, 130];
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      var temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
  }
}
console.log(array);
// Question no # 2

// create new serries of array missing one number and found this number in the array
var series = [1, 2, 3, 5, 6, 7, 8, 9, 10];
var missingNumber = null;
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing number in the series:", missingNumber);

// create new serries of array missing some number and found this number in the array
var series = [1, 2, 3, 4, 5, 6, 7, 8, 10];
var missingNumber = [];
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing numbers in the series:", missingNumber);
