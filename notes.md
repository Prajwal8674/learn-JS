# JavaScript Learning Notes

## Day 1: Variables & Data Types

### Variable Declaration
- **var**: Old way of declaring variables (function-scoped)
- **let**: Modern way of declaring variables (block-scoped)

### Data Types Covered
- **Numbers**: Store numeric values (e.g., `a = 10`, `x = 20`)
- **Strings**: Store text values (e.g., `name = "Prajwal"`)
- **Booleans**: Store true/false values (e.g., `flag = true`)

### Key Concept
- Variables can be reassigned after declaration (e.g., `x = 10` then `x = 20`)
- Use `console.log()` to display values in browser/console

---

## Day 2: Functions & DOM Manipulation

### DOM Manipulation Basics
- `document.querySelector()`: Select HTML elements using CSS selectors
- `element.innerText`: Change text content of HTML elements

### Working with Functions
- Functions help organize code and reuse logic
- Can perform specific tasks when called
- Can interact with DOM to update page content

### Real-World Example: Shopping Cart
- Select heading element
- Create function to increment cart count
- Update DOM whenever cart changes
- Create reset function to clear cart

---

## Day 3: Loops

### 1. **for-in Loop** (for objects)
- Iterates through **keys/properties** of an object
- Syntax: `for(let key in object)`
- Useful for accessing object key-value pairs

### 2. **for-of Loop** (for arrays/strings)
- Iterates through **values** directly
- Syntax: `for(let value of array/string)`
- Works with strings, arrays, and iterables

### 3. **Traditional for Loop** (with conditions)
- Syntax: `for(let i = 0; i <= 100; i++)`
- Can add conditions to filter results:
  - **Even numbers**: Use `if(i % 2 == 0)`
  - **Odd numbers**: Use `if(i % 2 != 0)`

### Loop Practice Problems Solved
- Print numbers from 1 to 100
- Print only even numbers (1-100)
- Print only odd numbers (1-100)

### User Input
- `prompt()`: Take input from user
- `Number()`: Convert string input to number for calculations

---

## Key Takeaways
✓ Variables store data of different types  
✓ Functions organize code and interact with the DOM  
✓ Loops help process collections (objects, arrays, strings)  
✓ Practice with real examples builds understanding
