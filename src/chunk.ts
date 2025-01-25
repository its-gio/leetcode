// Takes an array and a chunk size, splits the array into many subarrays where each subarray is of length size

function chunk(items: number[], size: number): Array<Array<number>> {
  // let marker = 0
  const result = [];

  for (let marker = 0; marker <= items.length - 1; marker += size) {
    result.push(items.slice(marker, marker + size));
  }

  /* while (marker <= items.length - 1) {
    result.push(items.slice(marker, marker + size))
    marker = marker + size;
  } */

  return result;
}
