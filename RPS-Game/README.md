# Rock Paper Scissors

A console-based Rock Paper Scissors game against the computer, 
played over 5 rounds with score tracking.

## How it works
1. Prompts the user for rock, paper, or scissors each round
2. Validates the input — invalid entries don't count as a played round
3. Picks a random move for the computer using `Math.random()`
4. Compares both choices to determine the round's winner
5. Tracks and logs the score after every round
6. After 5 valid rounds, announces the overall match winner

## Concepts practiced
- Comparison operators (`==`)
- Logical operators (`&&`)
- Conditional logic (`if / else if / else`)
- Increment operator (`++` and `--`)
- Loops (`for`) with manual round control
- Arrays and `.includes()`
- `Math.random()` for random selection

## How to run
Since this uses `prompt()`, it needs a browser environment:
1. Open any webpage in Chrome/Edge
2. Press F12 to open DevTools → go to the Console tab
3. Paste the code and press Enter