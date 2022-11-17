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

// Optional property access operator: used to check if a property exist in variable or to check if function is actually a function when calling the function.
// Creating a customer type.
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0? null : {birthday: new Date()}
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()) // use the optional property access to access customer as it may be null. Same for birthday.

const log = (data: any)=> console.log(data);

// use optional property access operator to check if function is actually exist. also used for access array element using the same syntax.
log?.("hello world");