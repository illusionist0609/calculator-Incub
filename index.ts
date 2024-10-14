import { add } from './stringCalculator';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers (comma-separated): ', (input: string) => {
    try {
        const result = add(input);
        console.log('The result is:', result);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
});
