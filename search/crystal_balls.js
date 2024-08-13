function crystal_balls(levels) {
    const jumpAmount = Math.floor(Math.sqrt(levels.length)); //4

    let i = jumpAmount; //4
    for(i; i < levels.length; i += jumpAmount) { // (i = 4; i < 20; i += 4)
        if (levels[i]) {
            console.log(`first ball breaks at level ${i}`); // 12
            break;
        }
    }
    i -= jumpAmount; // 8
    for(let j = 0; j <= jumpAmount && i < levels.length; j++, i++) { // (j = 0; j <= 4 && i < 20; j++ i++)
                                                                     // (j = 1; i = 9;)
                                                                     // (j = 2; i = 10;)
        console.log(`value od j=${j} and the value of i=${i}`);
        if (levels[i]) {
            console.log(`second ball breaks at level ${i}`);
            return i;
        }
    }
    console.log(`level not found`);
    return -1;
}

// const levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const levels = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

crystal_balls(levels);