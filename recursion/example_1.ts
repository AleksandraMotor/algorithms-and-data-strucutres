function foo(n: number): number {
    if (n === 1) {
        // console.log(1);
        return 1;
    }

    // console.log(n + foo(n-1));
    return n + foo(n-1);
}

console.log(foo(5));