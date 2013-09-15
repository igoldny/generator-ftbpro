'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var AllGenerator = module.exports = function AllGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  this.hookFor('ftbpro:presenter', {
    args: args
  });
  this.hookFor('ftbpro:view', {
    args: args
  });
  this.hookFor('ftbpro:template', {
    args: args
  });
  this.hookFor('ftbpro:css', {
    args: args
  });
  this.hookFor('ftbpro:spec', {
    args: args
  });
};

util.inherits(AllGenerator, yeoman.generators.NamedBase);
