import { EmptyOptional } from "~emptyOptional";
import { Empty } from "~empty";

export class Optional<T> {

    private _value: T;

    get value(): T {
        return this._value;
    }
    set value(value: T) {
        this._value = value;
    }
    
    public isPresent(): boolean {
        return (this._value != null ? true : false)  
    }
    
    public get(): T {
        return this._value; 
    }
        
    public static of = <T>(type: T) => {
        return new Optional<T>(type)
    }

    public static empty<T>() {
        return new Optional<T>(null);
    }

    public static ofnNullable = <T>(type: T) => {
        return (type != undefined || type != null) ? new Optional<T>(type) : new Optional<T>(null);
    }

    public orElse = (other: T) => {
        return  (this._value != null || this._value != undefined) ? this.value : other;
    }

    public orElseThrow = (msg: string): T => {
        if (this._value == null) {
            throw Error('No value in Optional ' + msg)
        }
        return this._value; 
    }
    
    public constructor(type?: T) {
        this._value = type;
    }

}