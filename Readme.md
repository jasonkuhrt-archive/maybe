# maybe

  Correct implementation of the Maybe monad in JavaScript

## Installation

  Install with [component(1)](http://component.io):

    $ component install jasonkuhrt/maybe

  Install with [npm(1)](https://npmjs.org)

    $ npm install jasonkuhrt/maybe

## API

##### maybe
    (else_value, (a -> b), monad_maybe) -> b

##### is_nothing
    (monad_maybe) -> Bool

##### is_just
    (monad_maybe) -> Bool

##### from_just
    (monad_maybe) -> Bool

##### from_maybe
    (else_value, monad_maybe) -> a



## License

  BSD-2-Clause