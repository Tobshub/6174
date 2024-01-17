# 6174

This rule is consist with all 4 digit numbers having unique digits (i.e. 1234 or 5968. Numbers like 1111 or 2330 are exempt from this rule):

For any number `n`

- Take the difference of `a` and `b`, where `a` is the larget number formed from the digits of `n` and `b` is the smallest number formed from the digits of `n`.
- Repeat this process and eventually the difference ends up being 6174 (or -6174).

6174 is known as [Kaprekar's constant](https://en.wikipedia.org/wiki/6174).

This same rule applies to all 3 digit numbers having unique digits, but the difference always ends up being 495.

This simple javascript script proves this and shows the number of steps it takes to get to Kaprekar's constant for any given number.

## Usage

You can specify a range of numbers:

```sh
node ./6174.js <start> <end> <target>
```

Or find the number of steps needed for a single number:

```sh
node ./6174.js <num> <target>
```

Note: if target is not the corresponding Kaprekar constant (i.e. 6174 for 4 digit numbers and 495 for 3 digit numbers) the script will enter an infinite loop.
