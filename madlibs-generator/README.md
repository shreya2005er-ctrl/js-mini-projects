# Mad Libs Generator

A console-based Mad Libs game built with vanilla JavaScript. 
Takes user input via `prompt()`, cleans it up, and randomly 
picks one of three story templates to fill in.

## How it works
1. Prompts the user for a place, bird, food, and action (verb)
2. Cleans the input using `.trim()` and `.toUpperCase()`
3. Builds a few different sentence versions to compare string
   concatenation (`+`) vs template literals (`` ` ` ``)
4. Randomly selects one of three story templates using
   `Math.random()` and `Math.floor()`
5. Logs the final story to the console

## Concepts practiced
- Variables (`let`, `const`)
- String methods: `.trim()`, `.toUpperCase()`, `.length`
- Template literals vs string concatenation
- Arrays
- `Math.random()` for random selection

## How to run
Paste the code into your browser's console, or run it with 
Node.js:
\`\`\`bash
node script.js
\`\`\`