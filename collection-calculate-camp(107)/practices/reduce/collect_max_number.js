'use strict';

function collect_max_number(collection) {
  return Math.max.apply( Math, collection );
}

module.exports = collect_max_number;
