function linear_search(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            console.log(`Our needle ${needle} is at index ${i}`);
            return i;  
        }
    }
    console.log(`${needle} is not in our haystack`)
    return false;
}

const test = [1, 2, 3, 4, 5, 6, 7];

linear_search(test, 0);