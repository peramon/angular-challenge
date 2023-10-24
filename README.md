# ChallengeOne

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Decorator

A decorator is a special type of declaration that can be attached to a class, method, access descriptor, property or parameter.

## @Input() Decorator

It is a child component (or directive) means that the property can receive its value from its parent component.

## @Output Decorator

In a child component (or directive) it allows data to flow from the child to the parent.

## Change Detection

It is the mechanism or change detection strategy that Angular uses to know when to update a component or the entire view in case the data has changed.

### What produces these changes ?

- Mouse events
- https calls
- setInterval
- setTimeOut

There are two strategies:
OnPush: Set the strategy to CheckOnce (on demand).
Default: Sets the strategy to CheckAlways.

### Pipes

Transform data, pipes receive a data, and can transform that data.