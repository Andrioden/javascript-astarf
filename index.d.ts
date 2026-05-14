export declare class GridNode {
    x: number;
    y: number;
    weight: number;
    f: number;
    g: number;
    h: number;
    visited: boolean;
    closed: boolean;
    parent: GridNode | null;
    constructor(x: number, y: number, weight: number);
    clean(): void;
    toString(): string;
    getCost(fromNeighbor: GridNode): number;
    isWall(): boolean;
}

export declare class Graph {
    nodes: GridNode[];
    diagonal: boolean;
    grid: GridNode[][];
    dirtyNodes: GridNode[];
    constructor(gridIn: number[][], options?: { diagonal?: boolean });
    cleanDirty(): void;
    markDirty(node: GridNode): void;
    neighbors(node: GridNode): GridNode[];
    toString(): string;
}

export declare class AStar {
    static search(
        graph: Graph,
        start: GridNode | [number, number],
        end: GridNode | [number, number],
        options?: {
            closest?: boolean;
            heuristic?: (pos0: GridNode, pos1: GridNode) => number;
        }
    ): GridNode[];
    static heuristics: {
        manhattan(pos0: GridNode, pos1: GridNode): number;
        diagonal(pos0: GridNode, pos1: GridNode): number;
    };
}
