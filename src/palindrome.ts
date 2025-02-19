// Palindrome: A palindrome is a string that reads the same forward and backward.
// Using two pointer
function palindrome(item: string): boolean {
  const splitItem = item.split("");
  let left = 0;
  let right = splitItem.length - 1;

  while (left <= right) {
    if (splitItem[left] !== splitItem[right]) return false;
    left++;
    right--;
  }

  return true;
}
