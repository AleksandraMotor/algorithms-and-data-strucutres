// [
// "# # # # # E #",
// "# ......... #",
// "# S # # # # #"
// ]

// Recursion:
// => Base Case:
// 1. on the wall
// 2. off the map
// 3. it's the end
// 4. if we have seen it
// => Recursive Case:
// pre
// recurse
// post

type Point = {
    x: number,
    y: number
}

const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 2. off the map
    if (curr.x < 0 || curr.x > maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
            return false;
    }

    // 1. on the wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. it's the end
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    // 4. if we have seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }
    
    // post
    path.pop();
    return false;
}

export default function solver(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i =0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    console.log(path);
    return path;
}

const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];
solver(maze, "x", {x: 10, y: 0}, {x: 1, y: 5});


// const maze = [
//     "x xx",
//     "x xx",
//     "x  x",
//     "xx x",
// ];

// solver(maze, "x", {x: 1, y: 0}, {x: 2, y: 3});
