import { Optional } from './optional'
import { Person } from './examples/person'
import { Car } from '~examples/car';

let person = new Person('juan')


let personOp: Optional<Person> = new Optional<Person>(person);


let car: Car = new Car('ford');
let carUnd: Car = undefined; 

let carOp: Optional<Car> = Optional.ofnNullable<Car>(car);
let carOp2: Optional<Car> = Optional.ofnNullable<Car>(carUnd);

let op: Optional<Car> = Optional.empty();

let opNull: Optional<Car> = Optional.ofnNullable(car);


let carOf: Optional<Car> = Optional.of(car);


console.log(carOp2.isPresent())
console.log(op)
console.log(carOf.get())

console.log('ORELSE')
console.log(Optional.of(carUnd))
console.log(Optional.of(carUnd).orElse(car))

let carError = null;

let carErrorOp:Optional<Car> = Optional.ofnNullable(carError);

console.log(carErrorOp.orElseThrow('CAR EMPTY'))



if (carOp.isPresent()) {
    console.log('esta el auto', carOp.get().model)
}