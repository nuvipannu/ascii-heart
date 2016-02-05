var CliGraph = require("cli-graph")
  , deffy = require("deffy")
  , ul = require("ul")
  ;

/**
 * asciiHeart
 * Generates a beautiful heart in ASCII art. :sparkling_heart:
 *
 * @name asciiHeart
 * @function
 * @param {Number} width The heart width (default: `40`).
 * @param {Number} height The heart height (default: `40`).
 * @param {Object} options An object containing the following fields:
 *
 *  - `fill` (String): The character used to fill the heart (default: `" "`).
 *  - `trim` (Boolean): If `false`, the trailing spaces on the right side will *not* be removed (default: `true`).
 *  - `k` (Number): A magic number used in the graph generating (default: `100`).
 *  - `step` (Number): The step precision (default: `0.01`).
 *
 * @return {String} The stringified heart.
 */
module.exports = function asciiHeart(width, height, options) {

    options = ul.merge(options, {
        k: 100
      , step: 0.01
      , fill: " "
      , trim: true
    });

    width = deffy(width, 40);
    height = deffy(height, 40);

    var k = options.k
      , step = options.step
      ;

    // Create the graph
    var heart = new CliGraph({
        height: height
      , width: width
      , marks: {
          hAxis: " "
        , vAxis: " "
        , center: " "
        , point: "*"
        , topArrow: " "
        , rightArrow: " "
      }
    });

    var minX = Infinity
      , maxX = -Infinity
      ;

    // Add points
    for (var i = -k; i <= k; i += step) {
        var x = (16 * Math.pow(Math.sin(i), 3)) * width / 40
          , y = (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)) * height / 40
          ;

        if (minX > x) {
            minX = x;
        }

        if (maxX < x) {
            maxX = x;
        }

        heart.addPoint(x, y);
    }

    // Start filling the heart
    if (options.fill !== " ") {
        for (var x = minX + 1; x < maxX; ++x) {
            var found = 0;
            for (var y = heart.options.center.y - heart.options.height; y < heart.options.height - heart.options.center.y; ++y) {

                if (heart.isPoint(x, y)) {
                    ++found;
                    while (heart.isPoint(x, ++y)) {}
                }

                if (found === 1) {
                    debugger
                    heart.addPoint(x, y, options.fill);
                }
            }
        }
    }

    var str = heart.toString();

    if (options.trim !== false) {
        str = str.split("\n").map(function (c) {
            return c.trimRight();
        }).filter(Boolean).join("\n");
    }

    return str;
};
