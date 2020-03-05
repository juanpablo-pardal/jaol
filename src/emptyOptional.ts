import { Optional } from "~optional";

export class EmptyOptional<T> extends Optional<T> {
    
    private static emptyOpString = 'Empty Optional'

    get(): T {
        return this.value;
    }
    constructor() {
        super();
        // this.value(null) 
    }
}