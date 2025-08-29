function permutation(
  pick: number,
  max: number,
  usePermutation: (indices: number[]) => void
): void {
  pick = Math.floor(pick);
  max = Math.floor(max);
  if (pick > max) return console.error("Pick cannot be greater than max.");
  if (pick <= 0) return console.error("Pick must be 1 or more.");
  if (max <= 0) return console.error("Max must be 1 or more.");

  const i: number[] = new Array(pick);
  loopOneIndex(i, pick, max, 0, usePermutation);
}

function loopOneIndex(
  indices: number[],
  pick: number,
  max: number,
  count: number,
  usePermutation: (indices: number[]) => void
) {
  for (indices[count] = 0; indices[count] < max; indices[count]++) {
    if (checkOverlap(indices, count)) {
      if (count < pick - 1)
        loopOneIndex(indices, pick, max, count + 1, usePermutation);
      if (count === pick - 1) usePermutation(indices);
    }
  }
}
function checkOverlap(indices: number[], count: number) {
  if (count <= 0) return true;
  if (indices.length <= count) return false;
  for (let i = 0; i < count; i++)
    if (indices[count] === indices[i]) return false;
  return true;
  git;
}

function counter(): (indices: number[]) => void {
  let permutationCount = 0;
  return function showIndices(indices: number[]) {
    permutationCount++;
    console.log(permutationCount, ...indices);
  };
}

let myShowIndices = counter();
// permutation(8, 8, myShowIndices);
permutation(5, 10, myShowIndices);
