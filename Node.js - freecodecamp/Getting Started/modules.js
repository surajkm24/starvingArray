// Modules = Encapsulated code (only share minimum)
// CommonJS , every file is module (by default)
// This is a way of dividing a huge js file into several files which can be used to work together.
// Modules can be created once and can be used in multiple places by importing that module there.
// It reduces complexity and gives our project a more structured look.

const sayHi = (name) => {
    console.log(`Hello ${name}!`)
}

sayHi('Suraj')