# Password Strength Checker

A console-based tool that checks a password against five common 
security rules and rates its overall strength.

## How it works
1. Prompts the user for a password
2. Runs it through five separate checks:
   - At least 8 characters long
   - Contains an uppercase letter
   - Contains a lowercase letter
   - Contains a number
   - Contains a special character
3. Calculates a score out of 5 based on how many checks pass
4. Converts that score into a strength label:
   - 0–2 → Weak
   - 3–4 → Medium
   - 5 → Strong
5. Logs both the score and the strength label to the console

## Concepts practiced
- Functions with parameters and return values
- Boolean logic (each checker function returns true/false)
- Regular expressions (`.test()`) for pattern matching
- Function composition (one function calling several others)
- Variable scope (local vs. outer scope, and why it matters)

## How to run
Since this uses `prompt()`, it needs a browser environment:
1. Open any webpage in Chrome/Edge
2. Press F12 to open DevTools → go to the Console tab
3. Paste the code and press Enter