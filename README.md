# javascript-astarf (fork of bgrins/javascript-astar)

## About

An implementation of the A* search/pathfinding algorithm in JavaScript. Supports diagonal movement and weighted nodes.

See a demo at http://www.briangrinstead.com/files/astar/

This is a improved and modernized fork of [bgrins/javascript-astar](https://github.com/bgrins/javascript-astar).


## How to use

**Get started**

1. Npm install ([link](https://www.npmjs.com/package/javascript-astarf))
   ```bash
   npm install javascript-astarf
   ```
2. Minimal example
    ```javascript
    // Module import
    import { AStar, Graph } from "javascript-astarf"
    
    // Create a new graph with a grid
    // - 0 = wall, 1 = walkable, >1 to increase path cost
    // - Lower left 0-value is x=1, y=0. Like accessing a 2d array[x][y]. Not cartesian coordinates.
    const graph = new Graph([
        [1, 1],
        [0, 1],
    ])
    
    // Search for path
    const result = AStar.search(graph, [0, 0], [1, 1])
    // result.length == 2
    // result[0] == { x: 1, y: 0, weight: 1 }
    // result[1] == { x: 1, y: 1, weight: 1 }
    ```


**Examples**

* Se the [astar-examples.test.js](./test/astar-examples.test.js) file for further examples on how to use this library


**Weights**

* Se the [astar-examples.test.js](./test/astar-examples.test.js) file for example
* A weight of 0 denotes a wall.
* A weight cannot be negative.
* A weight cannot be between 0 and 1 (exclusive).
* A weight higher than 1 increases the cost of moving through that node.
* A weight can contain decimal values (greater than 1).


## Development


**Setup**

1. Install node 22+
2. `npm install`
3. `npm run test`


**Open demo page**

Simply open the `web/index.html` file in your browser.


**Lint code**

Run `lint.ps1` on windows
