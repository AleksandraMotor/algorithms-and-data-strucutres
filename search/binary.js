function binary_search(haystack, needle) {
    let lo = 0;
    let hi = haystack.length;
    do {
        const mid = Math.floor(lo + (hi - lo)/2);
        const v = haystack[mid];

        if (v === needle) {
            console.log(`Our needle is at index ${v}`);
            return v;
        } else if (v > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi)
        console.log("Value not found");
        return false;
}

const test = [1, 2, 3, 4, 5, 6, 7];

binary_search(test, 1);