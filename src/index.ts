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