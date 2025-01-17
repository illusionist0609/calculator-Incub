
---

# String Calculator

This is a simple String Calculator implementation in TypeScript that takes a string of comma-separated numbers, newlines, or custom delimiters and returns their sum. If the string contains negative numbers, the application will throw an exception.

## Features

- Add numbers from a comma-separated string.
- Handle newlines as delimiters.
- Support custom delimiters.
- Throw an error for negative numbers, displaying all negative numbers in the message.

## Prerequisites

- **Node.js** (v14 or higher)
- **Yarn** (or **npm**)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd string-calculator
   ```

2. Install the project dependencies:

   ```bash
   yarn install
   ```

   Or, if you're using npm:

   ```bash
   npm install
   ```

## Running the Application

1. Compile the TypeScript code:

   ```bash
   yarn tsc
   ```

   Or, if you're using npm:

   ```bash
   npx tsc
   ```

2. Run the application and provide input:

   ```bash
   node dist/index.js
   ```

   When prompted, enter the string of numbers you'd like to calculate, for example:

   ```
   Enter numbers (comma-separated or custom delimiter): 1,2,3
   ```

   It will return the sum:

   ```
   The result is: 6
   ```

   Example with custom delimiter:

   ```
   Enter numbers (comma-separated or custom delimiter): //;\n1;2;3
   ```

   Output:

   ```
   The result is: 6
   ```

## Running Tests

This project uses **Jest** for testing. You can run the tests to ensure all functionalities work as expected.

1. To run the tests, simply use:

   ```bash
   yarn test
   ```

   Or, if you're using npm:

   ```bash
   npm test
   ```

The tests will run and display results for the various cases, including handling of custom delimiters, newlines, and negative number errors.

## How the Code Works

- The main logic of the String Calculator is in the `stringCalculator.ts` file.
- Custom delimiters can be provided in the format `//[delimiter]\n[numbers]`.
- Negative numbers are detected and throw an error.
- Supports unlimited numbers and handles both commas and newlines as delimiters.

## Example Inputs

| Input                        | Output                   |
|-------------------------------|--------------------------|
| `""`                          | `0`                      |
| `"1"`                         | `1`                      |
| `"1,2,3"`                     | `6`                      |
| `"1\n2,3"`                    | `6`                      |
| `"//;\n1;2;3"`                | `6`                      |
| `"//;\n1;-2"`                 | Error: negative numbers not allowed -2 |
| `"//[***]\n1***2***3"`        | `6`                      |

--- 