/**
 * From an odd length array, get the item that has no duplicates.
 * @param {number[]} target Target array.
 */
const getSingle = (target = []) => {
	let ones = 0;
	let twos = 0;
	let commonBitMask;

	for (item of target) {
		/* "one & item" gives the bits that are  there in both 'ones' and new
		element from target. We add these bits to 'twos' using bitwise XOR */
		ones = ones ^ item;
		/* The common bits are those bits which appear third time. So these bits
		should not be there in both ones and twos. commonBitMask contains al
		these bits as 0, so that the bits can be removed from ones and twos */
		commonBitMask = ~(ones & twos);
		/* Remove common bits (the bits that appear third time) from 'ones' */
		ones &= commonBitMask;
		/* Remove common bits (the bits that appear third time) from 'twos' */
		twos &= commonBitMask;
	}

	return ones;
};
