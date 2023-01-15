# Javascript Eloquent - Notes

## Numbers

There are three special values in JavaScript that are considered numbers but don`t behave like normal numbers.

They are `Infinity` , `-Infinity` and `NaN`.

We can get `NaN` when trying to calculate 0 / 0 or `Infinity` - `Infinity` or trying to parse a non valid number to a number.

## Unary operators

Only operate on a single value.

`typeof`

`instanceOf`

`-`

`+`

etc.

## Binary operators

Operator on two values.

`+`

`-`

`>`

`<`

etc.

## Boolean

When mixing the boolean operators (`>` `<` `==`, `&&`, `||` ) with arithmetic and other operators we have a different way of precedence. || has the lowest precedence, then comes &&, then the comparison operators (>, ==, etc) and the rest.

## Ternary operator or conditional operator

`true ? 1 : 2`

## Short-circuiting

It is the evaluation of an expression from left to right with || and && operators.

## Expressions and statements

A fragment of code that produces a value is called an expression. Every value that is written literally (such as 22 or “psychoanalysis”) is an expression.

A binary operator is applied to two expressions or a unary operator is applied on one.

The simpliest kind of statement is an expression with a semicolon after it. This is a program:

```
1;

false;
```
