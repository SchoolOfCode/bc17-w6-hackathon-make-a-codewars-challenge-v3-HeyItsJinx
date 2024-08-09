import { test, expect } from '@playwright/test';
import { wordLength } from 'main.js';

//making a test function
test('total number of letters in the word', async () => {
    const testCase = [
        { word: 'Coding', expectedCount: 6 },
        { word: 'Because', expectedCount: 7 }];
    //making word the user is inputting
    for (const { word, expectedCount } of testCase) {
        //continous check to see what word has been inserted and how long it is
        const actualCount = wordLength(word);
        expect(actualCount).toBe(expectedCount);
        console.log(`Test for word "${word}": expected ${expectedCount}, got ${result}`)
    }