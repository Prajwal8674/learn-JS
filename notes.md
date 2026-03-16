# JavaScript Concepts - Detailed Notes

## 1. Variables & Data Types

### What are Variables?
Variables are containers that store data values. They're like labeled boxes that hold information your program needs to use.

### Variable Declaration: var vs let vs const

#### **var** (Older Standard)
- Function-scoped (not block-scoped)
- Can be redeclared and reassigned
- Gets hoisted (moved to top of scope)
- Avoid using in modern JavaScript
```javascript
var x = 10;
var x = 20;  // Redeclaration allowed
```

#### **let** (Modern Standard)
- Block-scoped (limited to { } block)
- Cannot be redeclared in same scope
- Cannot be accessed before declaration
- Preferred for variables that change
```javascript
let age = 25;
age = 26;  // Reassignment allowed
// let age = 27;  // Error: redeclaration not allowed
```

#### **const** (Modern Constant)
- Block-scoped
- Cannot be reassigned or redeclared
- Must be initialized at declaration
- Used for values that shouldn't change
```javascript
const PI = 3.14159;
// PI = 3.14;  // Error: cannot reassign
```

### Primitive Data Types

#### **Numbers**
- Stores numeric values (integers and decimals)
- Supports mathematical operations
```javascript
let count = 42;
let price = 19.99;
let result = count + price;
```

#### **Strings**
- Stores text/character data
- Can use single quotes, double quotes, or backticks
- Backticks allow template literals with variables
```javascript
let name = "John";
let message = `Hello, ${name}!`;  // Template literal
let length = name.length;  // Access string length
```

#### **Booleans**
- Stores true or false values
- Used for conditional logic and comparisons
```javascript
let isActive = true;
let isStudent = false;
let isAdult = age >= 18;  // Result is boolean
```

#### **null and undefined**
- **undefined**: Variable declared but no value assigned
- **null**: Variable explicitly set to have no value
```javascript
let x;  // undefined
let y = null;  // explicitly no value
```

#### **Objects**
- Stores key-value pairs (properties)
- Used to group related data
```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);  // Access property
```

#### **Arrays**
- Stores lists of values in order
- Access elements by index (starting at 0)
```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]);  // "red"
```

---

## 2. Functions

### What are Functions?
Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs easier to maintain.

### Function Declaration
```javascript
function greet(name) {
    console.log("Hello, " + name);
    return name.length;
}
greet("Alice");  // Calling the function
```

### Function Components
- **Function name**: Identifies what function does
- **Parameters**: Inputs the function accepts
- **Function body**: Code to execute inside { }
- **Return statement**: Value the function sends back

### Function Expression (Arrow Functions)
```javascript
const add = (a, b) => {
    return a + b;
};
// Or shorthand for single line:
const multiply = (a, b) => a * b;
```

### Function Characteristics
- **Parameters vs Arguments**:
  - Parameters: variables in function definition
  - Arguments: actual values passed when calling
- **Return value**: Value sent back to caller
- **Scope**: Variables inside function only exist there

---

## 3. DOM Manipulation

### What is the DOM?
The Document Object Model is the structure of an HTML page. JavaScript can interact with and modify it dynamically.

### Selecting Elements
```javascript
// Select first matching element
let element = document.querySelector("selector");

// Select by ID
let header = document.querySelector("#myId");

// Select by class
let items = document.querySelector(".myClass");

// Select all matching elements (returns array-like)
let allItems = document.querySelectorAll(".item");
```

### Modifying Elements
```javascript
// Change text content
element.innerText = "New text";
element.textContent = "New text";

// Change HTML content (with tags)
element.innerHTML = "<p>New HTML</p>";

// Change attributes
element.setAttribute("id", "newId");
element.id = "newId";

// Change styles
element.style.color = "red";
element.style.fontSize = "20px";

// Add/remove classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

### Event Handling
```javascript
// Add event listener
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Common events: click, change, input, submit, hover, etc.
```

---

## 4. Loops

Loops execute code repeatedly until a condition is met.

### **Traditional for Loop**
- Best for: When you know how many iterations needed
- Syntax: `for(init; condition; increment)`
```javascript
for(let i = 0; i < 10; i++) {
    console.log(i);  // Prints 0 to 9
}
```

**Loop Flow:**
1. Initialize counter (i = 0)
2. Check condition (i < 10)
3. Execute body
4. Increment (i++)
5. Repeat steps 2-4

**Common Patterns:**
```javascript
// Count backwards
for(let i = 10; i > 0; i--) { }

// Skip values (increment by 2)
for(let i = 0; i < 20; i += 2) { }

// Even numbers check
if(i % 2 == 0) { console.log("Even"); }

// Odd numbers check
if(i % 2 != 0) { console.log("Odd"); }
```

### **while Loop**
- Best for: When condition is more complex
- Executes as long as condition is true
```javascript
let count = 0;
while(count < 5) {
    console.log(count);
    count++;
}
```

### **do...while Loop**
- Executes at least once before checking condition
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while(count < 5);
```

### **for...in Loop**
- Best for: Iterating over object properties
- Iterates through **keys/property names**
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC"
};

for(let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: NYC
```

### **for...of Loop**
- Best for: Iterating over arrays and strings
- Iterates through **values directly**
```javascript
let fruits = ["apple", "banana", "orange"];

for(let fruit of fruits) {
    console.log(fruit);
}
// Output: apple, banana, orange

let word = "hello";
for(let letter of word) {
    console.log(letter);  // h, e, l, l, o
}
```

### **Loop Control**
```javascript
// break: Exit loop immediately
for(let i = 0; i < 10; i++) {
    if(i == 5) break;  // Stops loop when i = 5
}

// continue: Skip to next iteration
for(let i = 0; i < 10; i++) {
    if(i == 5) continue;  // Skips i = 5
    console.log(i);
}
```

### **Choosing the Right Loop**
- **for**: Fixed number of iterations
- **while**: Unknown number of iterations
- **for...in**: Iterate over object properties
- **for...of**: Iterate over array/string values
- **forEach**: Array method (alternative to for)

---

## 5. Conditional Statements

### **if...else Statement**
```javascript
if(condition) {
    // Execute if true
} else if(anotherCondition) {
    // Execute if anotherCondition true
} else {
    // Execute if all false
}
```

### **Comparison Operators**
- `==` : Equal (loose comparison)
- `===` : Strictly equal (type and value)
- `!=` : Not equal
- `>`, `<` : Greater than, less than
- `>=`, `<=` : Greater/less than or equal

### **Logical Operators**
- `&&` : AND (both conditions true)
- `||` : OR (at least one true)
- `!` : NOT (opposite)

```javascript
if(age >= 18 && hasLicense) {
    console.log("Can drive");
}
```

---

## Key Concepts Summary

| Concept | Use Case | Example |
|---------|----------|---------|
| **Variables** | Store data | `let name = "John"` |
| **Functions** | Reuse code | `function add(a,b) { return a+b; }` |
| **DOM** | Interact with page | `document.querySelector(".btn")` |
| **for loop** | Fixed iterations | `for(let i=0; i<10; i++)` |
| **for...in** | Object properties | `for(let key in obj)` |
| **for...of** | Array/string values | `for(let val of arr)` |
| **if...else** | Make decisions | `if(x > 5) { ... }`
