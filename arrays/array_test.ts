// Is const a = []; an array? -> No It's an Array List

const a: number[] = [];

// get time
function time(fn: () => void): number {
    const now = Date.now();
    fn();
    return Date.now() - now;
}

// O(n)
function unshift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.unshift(Math.random());
    }
}

// O(n)
function shift(number: number) {
    for (let i = 0; i < number; ++i) {
        a.shift();
    }
}

// O(1)
function pop(number: number) {
    for (let i = 0; i < number; ++i) {
        a.pop();
    }
}

// O(1)
function push(number: number) {
    for (let i = 0; i < number; ++i) {
        a.push();
    }
}

// O(1)
function get(idx: number) {
    return function() {
        return a[idx];
    }
}

function push_arr(count: number) {
    return function() {
        push(count);
    }
}

function pop_arr(count: number) {
    return function() {
        pop(count);
    }
}

function unshift_arr(count: number) {
    return function() {
        unshift(count);
    }
}

function shift_arr(count: number) {
    return function() {
        shift(count);
    }
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(get(t - 1)));
});

console.log("Push");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(push_arr(1000)));
});

console.log("Push");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(push_arr(1000)));
});

console.log("Pop");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(pop_arr(1000)));
});

console.log("Unshift");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(unshift_arr(1000)));
});

console.log("Shift");
tests.forEach( t => {
    a.length = 0;
    push(t);
    console.log(t, time(shift_arr(1000)));
});