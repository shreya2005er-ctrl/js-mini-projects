# Contact Book Manager

A console-based contact book. Add, find, update, remove, and save 
contacts — each with a nested address object.

## How it works
1. Repeatedly prompts the user to choose an action: add, show, 
   find, update, remove, save, or quit
2. Each contact is an object with a nested `Address` object 
   (city, pincode) inside it
3. Validates that all required fields are filled before adding
4. Supports safely checking for missing properties and nested 
   data without crashing
5. Can export the entire contact list as a JSON string
6. Loop continues until the user chooses "quit"

## Concepts practiced
- Objects and nested objects
- Object destructuring
- Optional chaining (`?.`)
- `hasOwnProperty()` for checking property existence
- Array methods on objects: `.forEach()`, `.indexOf()`, `.splice()`
- `JSON.stringify()` and `JSON.parse()`
- Input validation with truthy/falsy checks

## How to run
Since this uses `prompt()`, it needs a browser environment:
1. Open any webpage in Chrome/Edge
2. Press F12 to open DevTools → go to the Console tab
3. Paste the code and press Enter