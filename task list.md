1. Define the Problem:

    Objective: Create a function that counts how many times each letter appears in a given word.

    Input: A string (e.g., "hello").

    Output: An object where keys are letters and values are their counts (e.g., { h: 1, e: 1, l: 2, o: 1 }).
----------------------------------------------------

2. Plan Your Solution:
Get the Input:

    Think: How will you receive the input? Will it be passed as a function argument?
    Process the Input:

    Think: What data structure will you use to store counts? (A JavaScript object or a Python dictionary would work well here.)
    Count Each Letter:

    Think: How will you iterate through each letter in the word and update the count?
    Return or Display the Result:

    Think: How will you return or show the result?
----------------------------------------------------
3. Design Your Function:
    Pseudo-code Example:

    Initialize a counter:

    Create an empty object to keep track of letter counts.
    Iterate through each letter in the word:

    For each letter, check if it’s already a key in the object.
    If it is, increment the count.
    If not, add it with a count of 1.
    
Return the result:
    Return the object containing letter counts
----------------------------------------------------

4. Write the Function:
Here’s how you can implement the above steps:

Initialize the Counter:

Create an empty object to hold letter counts.
Loop Through the Word:

Use a loop to go through each character in the string.
Update Counts:

Check if the letter exists in the object. If it does, increment the count. If it doesn’t, add it.
Return the Result:

Return the object with all the letter counts.
----------------------------------------------------
