# JavaScript Concepts - Simple Notes

## 1. Variables & Data Types

### What are Variables?
Variables are containers that store data for your program.

### Variable Types
| Keyword | Scope | Can Reassign? | Can Redeclare? | Notes |
|---------|-------|---------------|----------------|-------|
| var     | Function | Yes | Yes | Older, avoid in modern JS |
| let     | Block    | Yes | No  | Use for changing values |
| const   | Block    | No  | No  | Use for constants |

```javascript
let age = 25;
const PI = 3.14;
```

### Primitive Data Types
- **Number**: Numeric values
```javascript
let count = 42;
```
- **String**: Text
```javascript
let name = "John";
let msg = `Hello, ${name}!`;
```
- **Boolean**: true / false
```javascript
let isAdult = age >= 18;
```
- **null & undefined**
```javascript
let x; // undefined
let y = null; // explicitly no value
```

### Objects & Arrays
- **Object**: Key-value pairs
```javascript
let person = {name: "John", age: 30};
console.log(person.name);
```
- **Array**: List of values
```javascript
let colors = ["red","green","blue"];
console.log(colors[0]);
```

---

## 2. Functions

### What are Functions?
Reusable blocks of code to perform tasks.

### Function Declaration
```javascript
function greet(name){
  console.log("Hello " + name);
  return name.length;
}
greet("Alice");
```

### Arrow Functions
```javascript
const add = (a,b) => a + b;
const multiply = (a,b) => { return a*b; };
```

**Notes:**
- Parameters = variables in function
- Arguments = actual values passed
- Return = value sent back
- Scope = variables inside function only

---

## 3. DOM Manipulation

### What is DOM?
HTML page structure that JS can interact with.

### Select Elements
```javascript
let element = document.querySelector(".myClass");
let items = document.querySelectorAll(".item");
let header = document.getElementById("myId");
```

### Change Content & Styles
```javascript
element.innerText = "New text";
element.innerHTML = "<p>HTML text</p>";
element.style.color = "red";
element.classList.add("active");
```

### Events
```javascript
button.addEventListener("click", () => console.log("Clicked!"));
```

---

## 4. Loops

### For Loop
```javascript
for(let i=0; i<10; i++){
  console.log(i);
}
```

### While Loop
```javascript
let i=0;
while(i<5){
  console.log(i);
  i++;
}
```

### Do...While Loop
```javascript
let i=0;
do{
  console.log(i);
  i++;
}while(i<5);
```

### For...in (Objects)
```javascript
let person = {name:"John", age:30};
for(let key in person){
  console.log(key + ": " + person[key]);
}
```

### For...of (Arrays/Strings)
```javascript
let fruits = ["apple","banana"];
for(let fruit of fruits){ console.log(fruit); }

let word = "hello";
for(let letter of word){ console.log(letter); }
```

### Loop Control
```javascript
for(let i=0;i<10;i++){
  if(i==5) break;
  if(i==3) continue;
  console.log(i);
}
```

---

## 5. Conditional Statements
```javascript
if(age >= 18 && hasLicense){
  console.log("Can drive");
} else if(age < 18){
  console.log("Too young");
} else {
  console.log("Cannot drive");
}
```
**Operators:**
- Comparison: `==`, `===`, `!=`, `<`, `>`, `<=`, `>=`
- Logical: `&&` (AND), `||` (OR), `!` (NOT)

---

## Quick Summary
| Concept | Use Case | Example |
|---------|----------|---------|
| Variables | Store data | `let name = "John"` |
| Functions | Reuse code | `function add(a,b){return a+b}` |
| DOM | Interact with page | `document.querySelector(".btn")` |
| Loops | Repeat code | `for(let i=0;i<10;i++)` |
| if...else | Decision making | `if(x>5){...}` |

