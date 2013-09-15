'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var SpecGenerator = module.exports = function SpecGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscored_name = fleck.underscore(this.name);
  this.dasherize_name = fleck.dasherize(this.underscored_name);
  console.log('creating ' + this.name + ' ftbpro spec');
};

util.inherits(SpecGenerator, yeoman.generators.NamedBase);

SpecGenerator.prototype.files = function files() {
  this.copy('spec.js.coffee', 'spec/singlepage/views/' + this.underscored_name + '_spec.js.coffee');
};
