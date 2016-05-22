export interface Thing {
    id?: string; //id from firebase
    name: string;
    color: string;
    dimensions: Dimension;
}

export interface Dimension {
    height: number;
    width: number;
    depth: number;
}

