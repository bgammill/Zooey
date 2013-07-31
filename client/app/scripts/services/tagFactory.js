'use strict';

angular.module('clientApp')
  .factory('tagFactory', function() {
    var tags = ['linux'];
    tags['linux'] = ['#linux is awesome!', 'i love #linux', 'virus-free thanks to #linux!'];
    return {
      getRandomTag: function() {
        return tags[Math.floor((Math.random()*tags.length - 1)+1)];
      },
      getPities: function(tag) {
        return tags[tag];
      }
    };
  });