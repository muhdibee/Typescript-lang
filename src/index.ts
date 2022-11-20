const sum: Function = (a: number, b: number)=>{
    console.log(`${a} + ${b} is ${a+b}.`);
}

sum(5,5);


// Data types. Every annotation of available begins with a small letter e.g "string" is uses to annotate a String type variable.
let numbers: number[] = [1, 2, 3];  // number array.
let a: number = 1_034_574_568;  // Number.  Underscores are placed for better readability.
let firstName: string = "Muhammad"; // String.
let is_published: boolean = true;  // Boolean
let myDocument; // Any.  when a variable is not initialized, the type becomes any.

// Tuple
let user: [number, string] = [20, "Muhammad"]; // tuple type with specific type for each element.
console.log(`${user[1]} ${user[0]}`);

// enum: enums are used to set multiple constant variables. first value can be set and the rest set automatically.
const enum  Size {Small = 1,  Medium, Large, XLarge};
let mySize = Size.XLarge;
console.log(mySize)


// functions: functions should be annotated with a return type and parameters can have default values.
function calculateTax(income: number, taxYear: number = 2022): number {
    if(taxYear < 2022){
        return income * 0.1
    }
    return income * 0.15
}

console.log(calculateTax(50_000))

// Objects:
let employee: {
    readonly id: number, // make the id property readability so that it's value cannot be changed during the course of the program.
    name?: string //make name property optional.
    retire: (Date: Date)=> void //Set the return type of a method to void i.e does not return any value.
} = {id: 1, name: 'muhammad', retire: (Date)=> console.log(Date)}


// using type alias to rewrite the employee object above.
type EmployeeType = {
    readonly id: number,
    name?: string
    retire: (Date: Date)=> void
}

// using the EmployeeType alias.
let myEmployee: EmployeeType = {
    id: 1,
    name: 'muhammad',
    retire: (Date)=> console.log(Date)
}

// Union type: use the | symbol to specify any of the specified types for a variable.
function kgToLbs(weight: number | string): number{
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}

// Intersection type: use the & symbol to specify multiple types of a variable.
type Draggable = {
    drag: () => void
};

type resizable = {
    reSize: () => void
};

type UIWidget = Draggable & resizable;

let textBox: UIWidget = {
    drag: () => {},
    reSize: () => {}
}

// Literal types: used to specify exact value of variable union and intersection can be used to specify the value.
let Quantity: 50 | 100 | 120 = 120;
let Metric: 'cm' | 'inch' = 'inch';

// Nullables (null type): used when a variable can be of type null.
function greet(name: string | null | undefined): string {
    if (name){
        return `Hello ${name.toLocaleUpperCase(name)}.`
    }
    return 'Hola!'
}

/*  Optional property access operator: used to check if a property
    exist in variable or to check if function is actually a function
    when calling the function.
    Creating a customer type.
*/
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0? null : {birthday: new Date()}
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()) // use the optional property access to access customer as it may be null. Same for birthday.

const log = (data: any)=> console.log(data);

/*  use optional property access operator to check
    if function is actually exist. also used for access
    array element using the same syntax.
*/
log?.("hello world");

//   Type assertion: used to specify the current type of a value as in the below example:
//   let phone = <HTMLInputElement> document.getElementById("phone");
//   log?.(phone.value);

// Unknown type: when using unknown type unlike the any type TypScript forces you to do type checking for the unknown variable or passed parameter.
function render(document: unknown) {
    // We have to narrow down to a specific type
    // before we can perform any operations
    // on an unknown type
    if(typeof document == 'string'){
        document.toUpperCase()
    }

    if(typeof document == 'number'){
        document.toString().toUpperCase()
    }


    // TypeScript throws an error when an unknown
    // variable is used without type checking.
    // document.round()
}

// never type: used to tell TypeScript compiler that a function will
// never return a value or always throw an error i.e it runs infinitely
// (note never void type is not same as never type)
function processEvents(): never {
    // This function never returns
    // because it has an infinite loop.
    while(true){
        // Read message from queue.
    }
}
// processEvents() //When this method is called, all code after it won't run.


/*
log("Hello World.")  // TypeScript throws an error when it detects an unreachable code. (when set in tsconfig.)
*/

// Create Account class.
class Account {
    nickname?: string;
    // with parameter properties, we can create and initialize
    // properties in one place.
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number){
    }

    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
        if(value < 0){
            throw Error("Invalid value")
        }
        this._balance = value;
    }
    deposit (amount: number): void {
        if(amount <= 0){
            throw Error('Invalid amount');
        }
        this._balance += amount;
    }
}

let account = new Account(1, "Muhammad", 100);
// setter methods should not be called
// on private properties like balance, only use other methods like
//deposit and withdraw to to update private variables
account.balance = 0;
account.deposit(100);
console.log(`${account.owner} your balance is: ${account.balance}`);
// Checking the type of an object.
console.log(account.owner, `account is an instanceof Account class:`, account instanceof Account);

class seatAssignment {
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new seatAssignment();

 seats.A1 = 'Muhammad';
seats.A2 = 'Sani';

console.log("Occupied seats:", Object.keys(seats).length);

// Create Ride class.
class Ride{
    private static _activeRides  : number = 0;

    static get activeRides(): number {
        return Ride._activeRides;
    }
    start(){
        Ride._activeRides++;
    }
    stop(){
        Ride._activeRides--;
    }

}

let ride_1 = new Ride()
let ride_2 = new Ride()

ride_1.start();
ride_2.start();

console.log("active rides:", Ride.activeRides);

class Person{
    constructor(public firstName: string, public lastName: string){}
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`
        }
        walk(){
            return console.log("here 234 Walking...")
        }
}

//  Using override key word to inherit a class.
class Student extends Person{
    constructor(public studentId: number, firstName: string, lastName: string){
        super(firstName, lastName)
    }
    takeTest(){
        return " student Taking test..."

    }
}

const student1 = new Student(1, 'Muhammad', 'Ibrahim');

console.log('I am here make student walk:', student1.takeTest());

// Using override key word to change modify the implementation of inherited method
class Teacher extends Person{
    override get fullName(): string {
        return "professor" + ' ' + super.fullName
    }
}

const teacher_1 = new Teacher("Yusuf", 'Sani');

console.log('Techer\'s name: ', teacher_1.fullName);

// Working with abstract classes
abstract class shape {
    constructor(public color: string){}
    abstract render(): void;
}

// Inheriting an abstract class
class circle extends shape{
    constructor(public radius: number, color:string){
        super(color)
    }
    override render(): {diameter: number, color: string} {
        return {diameter: this.radius * 2, color: this.color}

    }
}

// Create an instance of circle class.
let RedCircle = new circle(4, "Red");

console.log('RedCircle Object:', RedCircle.render());
