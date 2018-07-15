# HappiTails - Pet Shelter program

## To Run the program

run the following (using a relative path)

`./app.rb`

## Problem Outline

A pet shelter allows for adoption/surrender of animals.

At start, the user is prompted with a menu of options:

- display all animals
- display all clients
- create an animal
- create an client
- facilitate client adopts an animal
- facilitate client puts an animal up for adoption

After selecting from the menu the task the user is prompted through the entire process

**Note that for most of the menu items I named them something similar to the outline above, however for "create an animal" i named it "Surrender - Anonymous" as i felt that it made more sense to an end user"**

## Technologies used

**oop** -

Object oriented programming in ruby.
Each file corresponds to an object which ideally should have a single responsibility

**pry** -

Pry is a gem that allows for debugging, it was used to facilitate trouble shooting at several stages during coding.

## Constraints

- Currently the user cannot see a list of a client's pets until the surrender process.
- Currently lists only show names

## Known issues

- Not all classes have single responsibility
- Code could be more concise
- When selecting an animal from a list during adoption or surrender it's required that the user hit enter twice.

## Future Considerations

- More abstraction
- Option to view each class instance in more detail
- Make the menu more easy on the eyes.