// The QuickSort algorithm uses a divide and conquer technique.
// The algorithm picks a pivot element and rearranges the array 
// so elements smaller than the pivot element move to the left side of the pivot, 
// and elements greater move to the right side.
// The algorithm then recursively sorts the subarrays on the left and right of the pivot element.

// Best: Olog(n)
// Worst (unsorted array): O(n2)

function qs(arr: number[], lo: number, hi: number): void {
    if(lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
};

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            
            // swap element
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp; // kurs version

            // [arr[i], arr[idx]] = [arr[idx], arr[i]]; // chatGPT
        }
    }

    idx++;

    // swap pivot to correct position
    arr[hi] = arr[idx];
    arr[idx] = pivot; // kurs version

    // [arr[hi], arr[idx]] = [arr[idx], arr[hi]]; // chatGPT

    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
    
};

const test = [9, 3, 7, 4, 69, 420, 42];

console.log(test);
quick_sort(test);
console.log(test);