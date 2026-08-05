# To-Do List Manager

A console-based to-do list app. Add, remove, complete, search, 
and count tasks through a repeating menu.

## How it works
1. Repeatedly prompts the user to choose an action: add, remove, 
   complete, show, search, count, or quit
2. Each action calls a dedicated function that operates on a 
   shared `tasks` array
3. Completed tasks are marked with a ✅ instead of being removed
4. Invalid menu choices and invalid index input are caught and 
   handled gracefully
5. Loop continues until the user chooses "quit"

## Concepts practiced
- Array methods: push, splice, filter, forEach, includes, startsWith
- Functions with parameters and return values
- Menu-driven program loop (while + break)
- Input validation (isNaN, truthy/falsy checks)

## How to run
Since this uses `prompt()`, it needs a browser environment:
1. Open any webpage in Chrome/Edge
2. Press F12 to open DevTools → go to the Console tab
3. Paste the code and press Enter