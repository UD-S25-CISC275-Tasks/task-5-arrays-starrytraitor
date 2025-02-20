/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers.length) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => (isNaN(+num) ? 0 : +num));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        if (amount[0] === "$") {
            return isNaN(+amount.substring(1)) ? 0 : +amount.substring(1);
        }
        return isNaN(+amount) ? 0 : +amount;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message: string): string => {
            if (message[message.length - 1] === "!") {
                return message.toUpperCase();
            }
            return message;
        })
        .filter(
            (message: string): boolean => message[message.length - 1] != "?",
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce(
        (total: number, word: string): number =>
            word.length < 4 ? ++total : total,
        0,
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) {
        return true;
    }
    let RGB: string[] = ["red", "green", "blue"];
    return !colors.some((color: string): boolean => !RGB.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) {
        return "0=0";
    }
    return addends
        .reduce((sum: number, num: number): number => sum + num, 0)
        .toString()
        .concat("=")
        .concat(addends.join("+"));
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (!values.length) {
        return [0];
    }
    let sum: number = 0;
    let negativePassed: boolean = false;
    return values.reduce(
        (sumArr: number[], value: number, i: number): number[] => {
            sumArr.push(value);
            if (value >= 0) {
                sum += value;
            }
            if (value < 0 && !negativePassed) {
                sumArr.push(sum);
                negativePassed = true;
            }
            if (i === values.length - 1 && !negativePassed) {
                sumArr.push(sum);
            }
            return sumArr;
        },
        [],
    );
}
