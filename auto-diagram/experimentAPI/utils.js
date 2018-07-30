module.exports = {
  inCaps: function (string) {
    return string.toUpperCase();
  },

  inQuotes: function (string) {
    return '"' + string + '"';
  },

  xTimes: function (jokeFunc, x) {
    var jokes = '';
    for (var i = 0; i < x; i++) {
      jokes +=  jokeFunc();
      if (i < x - 1) {
        jokes += '\n';
      }
    }
    return jokes;
  }
};
