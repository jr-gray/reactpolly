Post mortem

I approached the problem using local state, with an initial state for the poll question and an array for the options. 

I created a function for handling the input, in which I updated the state with the text. On submit, I created a function to check for a valid poll (at least 2 options, and a question between 1 and 140 characters).

I decided to make a separate component for the poll entry. This would be more helpful for modularizing the code. Unfortunately I didn't have enough time to connect that data back to its parent component when logging the JSON data to the console. If I had to redo it I'd probably keep it as one component for simplicity.

For conditional rendering of the submit button, I used a ternary and rendered a different CSS class based on whether the criteria was met.