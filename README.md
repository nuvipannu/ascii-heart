# ascii-heart [![Version](https://img.shields.io/npm/v/ascii-heart.svg)](https://www.npmjs.com/package/ascii-heart) [![Downloads](https://img.shields.io/npm/dt/ascii-heart.svg)](https://www.npmjs.com/package/ascii-heart)

> Create ASCII hearts using Node.js.

## Installation

```sh
$ npm i --save ascii-heart
```

## Example

```js
var asciiHeart = require("ascii-heart");

// Default behavior
console.log(asciiHeart());
// =>
//                    * * * * * *                   * * * * * *
//                * * *         * * *           * * *         * * *
//            * * *                 * *       * *                 * * *
//            *                       * *   * *                       *
//          *                           *   *                           *
//        * *                           * * *                           * *
//        *                               *                               *
//        *                               *                               *
//        *                                                               *
//        *                                                               *
//        *                                                               *
//        * *                                                           * *
//          *                                                           *
//          * *                                                       * *
//            * *                                                   * *
//              * *                                               * *
//                * *                                           * *
//                  * *                                       * *
//                    * *                                   * *
//                      * *                               * *
//                        * *                           * *
//                          * *                       * *
//                            * *                   * *
//                              * *               * *
//                                * *           * *
//                                  * *       * *
//                                    * *   * *
//                                      * * *
//                                        *
//                                        *

// Display a small heart (width x height) <3
console.log(asciiHeart(10, 10));
// =>
//     * * *   * * *
//   * *   * * *   * *
//   *       *       *
//   * *           * *
//     * *       * *
//       * *   * *
//         * * *
//           *

// Display a small heart,
console.log(asciiHeart(40, 40, {
    fill: "❤"
}));
// =>
//                    * * * * * *                   * * * * * *
//                * * * ❤ ❤ ❤ ❤ * * *           * * * ❤ ❤ ❤ ❤ * * *
//            * * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *       * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * * *
//            * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *   * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//          * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *   * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//        * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//        * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//          * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ *
//          * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//            * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//              * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                  * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                    * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                      * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                        * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                          * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                            * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                              * * ❤ ❤ ❤ ❤ ❤ ❤ ❤ * *
//                                * * ❤ ❤ ❤ ❤ ❤ * *
//                                  * * ❤ ❤ ❤ * *
//                                    * * ❤ * *
//                                      * * *
//                                        *
//                                        *
```

## Documentation

### `asciiHeart(width, height, options)`
Generates a beautiful heart in ASCII art. :sparkling_heart:

#### Params
- **Number** `width`: The heart width (default: `40`).
- **Number** `height`: The heart height (default: `40`).
- **Object** `options`: An object containing the following fields:
 - `fill` (String): The character used to fill the heart (default: `" "`).
 - `trim` (Boolean): If `false`, the trailing spaces on the right side will *not* be removed (default: `true`).
 - `k` (Number): A magic number used in the graph generating (default: `100`).
 - `step` (Number): The step precision (default: `0.01`).

#### Return
- **String** The stringified heart.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Nuvi Pannu][website]

[license]: http://showalicense.com/?fullname=Nuvi%20Pannu%20%3Cnuvipannu%40gmail.com%3E%20(http%3A%2F%2Fnuvipannu.com)&year=2016#license-mit
[website]: http://nuvipannu.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md