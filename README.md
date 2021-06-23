# http-errors

## What the heck is it?
A quick and easy little module that creates HTTP errors (extending Error class)
which are then handled by Express middleware.

## Motivation
I have created the same boilerplate code to implement error handlers and write
errors in more than two Express projects. To keep the development process dry, I
modularized the design of the error handler and errors.

## Installation
`npm i benbolthouse/http-errors`

## Implementation
The default export of the module contains classes corresponding to HTTP error
types (400/500 range errors). They are given names identical to code names in
pascal case, e.g. `BadRequest`, `InternalServerError`, etc. Require these
classes and throw them using a constructor as you would with the `Error` class.

In addition to HTTP errors classes, the default export also contains
`expressJsonErrorHandler`. This is a middleware function designed to be used
in `app.use(expressJsonErrorHandler)` or
`router.use(expressJsonErrorHandler)`, depending on the flavor of your app.

And that's pretty much it! Happy hacking!
