export default function bs_list(haystack: number[], needle: number): boolean {
  let lowPosition = 0;
  let highPosition = haystack.length;

  do {
    const middlePosition = Math.floor(lowPosition + (highPosition - lowPosition)/2);
    const middleValue = haystack[middlePosition];

    if (middleValue === needle) {
      return true;
    } else if (middleValue > needle) {
      highPosition = middlePosition - 1;
    } else { // middleValue < needle
      lowPosition = middlePosition + 1;
    }
  } while (lowPosition < highPosition)
  
  return false;
}