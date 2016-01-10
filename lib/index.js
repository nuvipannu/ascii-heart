var CliGraph = require("cli-graph")
  , deffy = require("deffy")
  ;

/**
 * asciiHeart
 * Generates a beautiful heart in ASCII art. :sparkling_heart:
 *
 * @name asciiHeart
 * @function
 * @param {Number} width The heart width (default: `40`).
 * @param {Number} height The heart height (default: `40`).
 * @param {Number} k A magic number used in the graph generating (default: `100`).
 * @param {Number} step The step precision (default: `0.01`).
 * @return {String} The stringified heart.
 */
module.exports = function asciiHeart(width, height, k, step) {

    width = deffy(width, 40);
    height = deffy(height, 40);
    k = deffy(k, 100);
    step = deffy(step, 0.01);

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

    // Add points
    for (var i = -k; i <= k; i += step) {
        heart.addPoint(
            (16 * Math.pow(Math.sin(i), 3)) * width / 40
          , (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)) * height / 40
        );
    }

    var str = heart.toString();
    str = str.split("\n").map(function (c) {
        return c.trimRight();
    }).filter(Boolean).join("\n");
    return str;
};
