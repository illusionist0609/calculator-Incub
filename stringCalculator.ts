export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }

    let delimiter = /[,\n]/;
    let numString = numbers;

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(
            `[${numbers.substring(2, delimiterEndIndex)}]`
        ); 
        numString = numbers.substring(delimiterEndIndex + 1); 
    }

   
    const numArray = numString.split(delimiter).map((num) => num.trim());

  
    const negatives: number[] = [];
    const sum = numArray.reduce((total, num) => {
        const parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) return total;
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }
        return total + parsedNum;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}
