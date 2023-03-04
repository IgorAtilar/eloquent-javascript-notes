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

## Functions

### Function Declaration

When we define a function with the function keyword we have a function declaration

```jsx
function square(x) {
  return x * x;
}
```

> Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.

## Call Stack

> The place where the computer stores this context is the _call
> stack_. Every time a function is called, the current context is
> stored on top of this stack. When a function returns, it removes the top
> context from the stack and uses that context to continue execution.

## **Closure**

A function that references bindings from local scopes around it is called a closure.

```jsx
function wrapValue(n) {
  let local = n;
  // We create a functio who returns the wrapped n value
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

## Recursion

Recursion, in typical JavaScript implementations, it’s about three times slower than the looping version.

## Pure function

> A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else)

## Properties

> Almost all JavaScript values have properties. The exceptions are `null`
> and `undefined`
> . If you try to access a property on one of these nonvalues, you get an error.

## Objects

> Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate `typeof []`
> , it produces `"object"`
> . You can see them as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.

We can’t compare the values inside of an object. We can just compare if they are appointing to the same memory position with `===`.

## JSON

We can serialize the javascript data with JSON to communicate on the Web.

> JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.
