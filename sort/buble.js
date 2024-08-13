function buble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array);
    return array;
}

// const test = [3, 6, 4, 8, 1, 4, 9, 0, 2, 7];
const test = ["e", "t", "9", "a", "l", ";", 9, 0];
buble_sort(test);